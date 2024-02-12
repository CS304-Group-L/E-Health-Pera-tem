package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Pharmacy {
    @Id
    
    private Long drug_id;

   
    private String drug_name;


    private String drug_brand;

    
    private int quantity;


    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
