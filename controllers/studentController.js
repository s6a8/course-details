import CourseModel from "../modles/Student.js";

class courseController {
  static createCourse = async (req, res) => {
    // console.log('---==---')
    console.log(req.body)
    console.log(req.query)
    try {
      const {name,image,university,faculty,duration,fees,certificate,eligibility} = req.query;
      
      const course = new CourseModel({
        name: name,
        image: image,
        university: university,
        faculty: faculty,
        duration: duration,
        fees: fees,
        certificate: certificate,
        eligibility: eligibility,
      });
      // Savin Document
      const result = await course.save();
      //console.log(result);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await CourseModel.find();
      //console.log(result)
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  /*static editDoc = async(req,res)=>{
     //console.log(req.params.id)
     try {
      const result = await CourseModel.findById(req.params.id)
      //console.log(result)
      res.render("edit",{data:result})

     } catch (error) {
      console.log(error)
     }

   }*/


  
  static updateDocById = async (req, res) => {
    //console.log(req.params.id)
    //console.log(req.body)
    try {
      const result = await CourseModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      // console.log(result)
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteDocById = async (req, res) => {
    //console.log(req.params.id)
    try {
      const result = await CourseModel.findByIdAndDelete(
        req.params.id,
        req.body
      );
      // console.log(result)
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
}

export default courseController;
