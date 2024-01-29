package com.example.demo.services;

import com.example.demo.dto.MedicineRecordeDto;
import com.example.demo.entity.Doctor.MedicineRecords;
import com.example.demo.reporsitory.MedicineRecordeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineRecordService {

    @Autowired
    private MedicineRecordeRepo medicineRecordeRepo;

    //add medicine records
    public boolean addMedicineRecord(MedicineRecordeDto medicineRecordeDto){
        MedicineRecords medicineRecords=new MedicineRecords();
        medicineRecords.setStudentNumber(medicineRecordeDto.getStudentNumber());
        medicineRecords.setMedicine(medicineRecordeDto.getMedicineList());
        medicineRecords.setTime(medicineRecordeDto.getTime());
        medicineRecords.setDate(medicineRecords.getDate());

        medicineRecordeRepo.save(medicineRecords);
        return true;
    }

    //view medicine records

    public List<MedicineRecords> getMedicineRecords(String studentNumber){
        return medicineRecordeRepo.getUserById(studentNumber);
    }
}
