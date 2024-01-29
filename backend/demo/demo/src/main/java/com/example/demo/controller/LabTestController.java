package com.example.demo.controller;

import com.example.demo.dto.LabTestDto;
import com.example.demo.entity.Doctor.LabTest;
import com.example.demo.services.LabTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/labTest")
@CrossOrigin
public class LabTestController {
    @Autowired
    private LabTestService labTestService;

    //issue lab test
    @PostMapping("issueLabTest")
    public boolean issueLabTest(LabTestDto labTestDto){
        return labTestService.addLabTest(labTestDto);
    }

    //view done lab test
    @GetMapping("viewDoneLabTest")
    public List<LabTest> viewDoneLabTest(String studentNumber){
        return labTestService.viewLabTest(studentNumber);
    }


}
