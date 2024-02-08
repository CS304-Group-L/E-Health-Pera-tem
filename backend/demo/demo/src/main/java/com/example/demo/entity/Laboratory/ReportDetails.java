package com.example.demo.entity.Laboratory;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="report_details")
public class ReportDetails {

    @Id
    @GeneratedValue
    @Column(name = "report_id", nullable = false)
    private String reportId;

    @Column(name="doctor_id",nullable = false)
    private String doctorId;

    @Column(name="student_id",nullable = false)
    private String studentId;

    @Column(name="report_name")
    private String reportName;

    @Column(name="status")
    private String status;

    @Column(name="insert_date")
    private Date insertDate;

    @Column(name="insert_user")
    private String insertUser;


}