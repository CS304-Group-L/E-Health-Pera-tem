package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Pharmacy {
    @Id
    @NotEmpty(message = "Drug ID is mandatory")
    private Long drug_id;

    @NotEmpty(message = "Drug name is mandatory")
    private String drug_name;

    @NotEmpty(message = "Drug band is mandatory")
    private String drug_brand;

    @NotEmpty(message = "Enter the quantity")
    private int quantity;


    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
    public int builder() {
        return builder;
    }