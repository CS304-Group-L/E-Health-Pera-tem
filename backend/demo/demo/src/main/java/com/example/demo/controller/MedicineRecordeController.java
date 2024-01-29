package com.example.demo.controller;

import com.example.demo.dto.MedicineRecordeDto;
import com.example.demo.entity.Doctor.MedicineRecords;
import com.example.demo.services.MedicineRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/medicineRecord")
@CrossOrigin
public class MedicineRecordeController {
    @Autowired
    private MedicineRecordService medicineRecordService;

    //give medicine

    @PostMapping("giveMedicine")
    public boolean giveMedicine(MedicineRecordeDto medicineRecordeDto){
        return medicineRecordService.addMedicineRecord(medicineRecordeDto);
    }
    //view medicine records

    @GetMapping("viewMedicineRecords")
    public List<MedicineRecords> viewMedicineRecords(String studentNumber){
        return medicineRecordService.getMedicineRecords(studentNumber);
    }
    
}
