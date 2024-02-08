package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class RequestReportDto {
    private String doctorId;
    private String doctorName;
    private String studentName;
    private String studentId;
    private String reportName;
}