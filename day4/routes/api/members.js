const express=require('express')
const router=express.Router()
const members=require('../../Members')
var uuid=require('uuid')

//Create Member
router.post('/',(req,res)=>{
	const newMember={
		id:uuid.v4(),
		name:req.body.name,
		email:req.body.email,
		status:'active'
	}
	if(!newMember.name||!newMember.email){
		return res.status(400).json({msg:'Please include a name and email'})
	}
	members.push(newMember)
	//res.json(members)
	res.redirect('/')
})

//Get All members
router.get('/',(req,res)=>{
	res.json(members)
})

// Get Single member
router.get('/:id',(req,res)=>{
	const found=members.some(member=>member.id===parseInt(req.params.id))
	if(found){
		res.json(members.filter(member=>member.id===parseInt(req.params.id)))
	}else{
		res.status(400).json({msg:`No member with the id of ${req.params.id}`})
	}
	
})

// Update member
router.put('/:id',(req,res)=>{
	const found=members.some(member=>member.id===parseInt(req.params.id))
	if(found){
		const updateMember=req.body
		members.forEach(m=>{
			if(m.id===parseInt(req.params.id)){
				m.name=updateMember.name? updateMember.name:m.name;
				m.email=updateMember.email?updateMember.email:m.email
				res.json({msg:'Member updated', m})
			}
		})
	}else{
		res.status(400).json({msg:`No member with the id of ${req.params.id}`})
	}
	
})


//Delete member

// Get Single member
router.delete('/:id',(req,res)=>{
	const found=members.some(member=>member.id===parseInt(req.params.id))
	if(found){
		res.json({msg:'Member deleted',members: members.filter(member=>member.id!==parseInt(req.params.id))})
	}else{
		res.status(400).json({msg:`No member with the id of ${req.params.id}`})
	}
	
})
module.exports=router