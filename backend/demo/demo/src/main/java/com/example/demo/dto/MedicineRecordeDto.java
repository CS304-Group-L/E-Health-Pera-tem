package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MedicineRecordeDto {

    private String date;
    private String time;
    private String studentNumber;
    private List<String> medicineList;
}
