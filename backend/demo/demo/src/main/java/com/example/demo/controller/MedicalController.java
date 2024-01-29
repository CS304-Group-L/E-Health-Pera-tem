package com.example.demo.controller;

import com.example.demo.dto.MedicalDto;
import com.example.demo.entity.Doctor.Medicals;
import com.example.demo.services.MedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/medicals")
@CrossOrigin
public class MedicalController {
    @Autowired
    private MedicalService medicalService;

    //add medicals
    @PostMapping("addMedicals")
    public boolean addMedicals(@RequestBody MedicalDto medicalDto){
       return medicalService.addMedicals(medicalDto);
    }

    //send emails to faculties

    //view medicals

    @GetMapping("getAllMedicalsByStudentNumber")
    public List<Medicals> getMedicals(@RequestParam String studentNumber) {
        System.out.println("Request received with studentNumber: " + studentNumber);
        try {
            List<Medicals> medicals = medicalService.getAllMedicals(studentNumber);
            System.out.println("Returning medicals: " + medicals);
            return medicals;
        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }



}
