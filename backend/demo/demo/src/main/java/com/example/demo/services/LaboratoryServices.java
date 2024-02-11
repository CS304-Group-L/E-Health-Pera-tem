package com.example.demo.services;

import com.example.demo.dto.GeneralResponse;
import com.example.demo.dto.RequestReportDto;
import com.example.demo.entity.Laboratory.ReportDetails;
import com.example.demo.reporsitory.LaboratoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class LaboratoryServices {
    @Autowired
    private LaboratoryRepository laboratoryRepository;
    public GeneralResponse saveRequestReport(RequestReportDto requestReportDto) {
        ReportDetails reportDetails = new ReportDetails();
        reportDetails.setDoctorId(requestReportDto.getDoctorId());
        reportDetails.setStudentId(requestReportDto.getStudentId());
        reportDetails.setReportName(requestReportDto.getReportName());
        reportDetails.setStatus("INITIATED");
        reportDetails.setInsertDate(new Date());
        laboratoryRepository.save(reportDetails);
        GeneralResponse generalResponse = new GeneralResponse();
        generalResponse.setMessageId("0");
        generalResponse.setMessage("SUCCESS");
        return generalResponse;

    }
}

