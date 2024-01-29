package com.example.demo.controller;

import com.example.demo.dto.HealthRecordDto;
import com.example.demo.entity.Doctor.HealthRecords;
import com.example.demo.services.HealthRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/healthRecord")
@CrossOrigin
public class HealthRecordController {
    @Autowired
    private HealthRecordService healthRecordService;

    //add health records
    @PostMapping("addHealthRecords")
    public boolean addHealthRecords(HealthRecordDto healthRecordDto){
        return healthRecordService.addHealthRecords(healthRecordDto);
    }

    //view health records

    @GetMapping("viewHealthRecords")
    public List<HealthRecords> viewHealthRecords(String studentNumber){
        return healthRecordService.viewHealthRecords(studentNumber);
    }
}
