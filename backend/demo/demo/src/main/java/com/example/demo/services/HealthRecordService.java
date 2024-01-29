package com.example.demo.services;

import com.example.demo.dto.HealthRecordDto;
import com.example.demo.entity.Doctor.HealthRecords;
import com.example.demo.reporsitory.HealthRecordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthRecordService {
    @Autowired
    private HealthRecordRepo healthRecordRepo;

    //add health records

    public boolean addHealthRecords(HealthRecordDto healthRecordDto){
        HealthRecords healthRecords=new HealthRecords();
        healthRecords.setDate(healthRecordDto.getDate());
        healthRecords.setTime(healthRecordDto.getTime());
        healthRecords.setStudentNumber(healthRecordDto.getStudentNumber());
        healthRecords.setDescription(healthRecordDto.getDescription());

        healthRecordRepo.save(healthRecords);
        return true;
    }

    //view health records

    public List<HealthRecords> viewHealthRecords(String studentNumber){
        return healthRecordRepo.getUserById(studentNumber);
    }

}
