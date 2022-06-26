const Project = require('../models/Project');

exports.createProject = async(req,res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.redirect("/")
    } catch (e) {
        console.log(e);
    }
}

exports.deleteProject = async(req,res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.redirect("/")
    } catch (e) {
        console.log(e);
    }
}

exports.updateProject = async (req,res) => {
    try {
        await Project.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/")
    } catch (e) {
        console.log(e);
    }
}
