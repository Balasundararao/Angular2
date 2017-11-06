'use strict';
var express = require('express');
var ser_courses = require('./ser_courses_services');
var coursesRoutes = express.Router();
coursesRoutes.get("/api/courses",       ser_courses.getAllCourses);
//coursesRoutes.get("/api/courses/:crsId",   ser_courses.getOneDoc); // Testing is pending
//coursesRoutes.post("/api/courses",         ser_courses.create);
//coursesRoutes.put("/api/courses/:crsId",   ser_courses.update); // Testing is pending.
//coursesRoutes.delete("/api/courses/:crsId",ser_courses.remove);
module.exports=coursesRoutes;
