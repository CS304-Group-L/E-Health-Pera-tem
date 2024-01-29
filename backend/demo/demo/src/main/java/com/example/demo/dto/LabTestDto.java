package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Data
public class LabTestDto {
    private String date;
    private String time;
    private String studentNumber;
    private String testName;
}
