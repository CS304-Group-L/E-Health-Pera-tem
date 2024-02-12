package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PharmacyDto {
    private long drug_id;
    private String drug_name;
    private String drug_brand;
    private int quantity;

//    public int getQuantity;
//    public int setQuantity;

}