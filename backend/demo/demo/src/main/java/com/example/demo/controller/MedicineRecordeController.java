package com.example.demo.controller;

import com.example.demo.dto.MedicineRecordeDto;
import com.example.demo.entity.Doctor.MedicineRecords;
import com.example.demo.services.MedicineRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/medicineRecord")
@CrossOrigin("http://localhost:3000")
public class MedicineRecordeController {
    @Autowired
    private MedicineRecordService medicineRecordService;

    //give medicine

    @PostMapping(value = "giveMedicine", consumes = "application/json")
    public boolean giveMedicine(@RequestBody MedicineRecordeDto medicineRecordeDto){
        System.out.println("Received DTO: " + medicineRecordeDto);
        return medicineRecordService.addMedicineRecord(medicineRecordeDto);
    }
    //view medicine records

    @GetMapping("viewMedicineRecords")
    public List<MedicineRecords> viewMedicineRecords(String studentNumber){
        return medicineRecordService.getMedicineRecords(studentNumber);
    }
    
}
