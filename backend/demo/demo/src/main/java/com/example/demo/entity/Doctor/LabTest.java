package com.example.demo.entity.Doctor;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name ="LabTest")
public class LabTest {
    @Id
    @GeneratedValue
    private Long id;

    private String date;
    private String time;
    private String studentNumber;
    private String testName;
    private boolean done;
}
