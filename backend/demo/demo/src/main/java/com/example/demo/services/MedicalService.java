package com.example.demo.services;

import com.example.demo.dto.MedicalDto;
import com.example.demo.entity.Doctor.Medicals;
import com.example.demo.reporsitory.MedicalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.List;

@Service
public class MedicalService {
    @Autowired
    private MedicalRepo medicalRepo;


    //add medicals

    public boolean addMedicals(MedicalDto medicalDto){
        Medicals medicals=new Medicals();
        medicals.setDate(medicalDto.getDate());
        medicals.setTime(medicalDto.getTime());
        medicals.setDiscription(medicalDto.getDescription());
        medicals.setExamName(medicalDto.getExamName());
        medicals.setStudentNumber(medicalDto.getStudentNumber());

        medicalRepo.save(medicals);
        return true;

    }

    //Get student medical records
    public List<Medicals> getAllMedicals(String studentNumber){
        return medicalRepo.getUserById(studentNumber);
    }
}
