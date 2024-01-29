package com.example.demo.services;

import com.example.demo.dto.LabTestDto;
import com.example.demo.entity.Doctor.LabTest;
import com.example.demo.reporsitory.LabTestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabTestService {
    @Autowired
    private LabTestRepo labTestRepo;

    //issue lab test
    public boolean addLabTest(LabTestDto labTestDto){
        LabTest labTest=new LabTest();
        labTest.setTestName(labTestDto.getTestName());
        labTest.setTime(labTestDto.getTime());
        labTest.setDate(labTestDto.getDate());
        labTest.setStudentNumber(labTestDto.getStudentNumber());
        labTest.setDone(false);

        labTestRepo.save(labTest);
        return true;
    }

    //view lab test

    public List<LabTest> viewLabTest(String studentNumber){

        return labTestRepo.findByStudentNumberAndDone(studentNumber);
    }


}
