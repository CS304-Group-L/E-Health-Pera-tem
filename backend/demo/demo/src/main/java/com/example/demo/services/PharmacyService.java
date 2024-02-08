package com.example.demo.services;

import com.example.demo.dto.PharmacyDto;
import com.example.demo.entity.Pharmacy;
import com.example.demo.reporsitory.PharmacyRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

@Service
@Transactional
@RequiredArgsConstructor
public class PharmacyService {
    @Autowired
    private PharmacyRepo pharmacyRepo;

//    @Autowired
//    private ModelMap modelMapper;

    public Pharmacy addPharmacy(Pharmacy pharmacy){
        return pharmacyRepo.save(pharmacy);
    }
    public void decreaseQuantity(Long pharmacyId,int quantityToDecrease){
        Pharmacy pharmacy = pharmacyRepo.findById(pharmacyId)
                .orElseThrow(() -> new EntityNotFoundException("Medicine not found"));
        int currentQuantity = pharmacy.getQuantity();
        if (currentQuantity < quantityToDecrease){
            throw new IllegalArgumentException("Not Enough quantity in stock");
        }
        pharmacy.setQuantity(currentQuantity - quantityToDecrease);
        pharmacyRepo.save(pharmacy);
    }

    public void deletePharmacy(Long pharmacyId){
        pharmacyRepo.deleteById(pharmacyId);
    }
    public PharmacyDto savePharmacy(PharmacyDto pharmacyDto){


        return pharmacyRepo.save( Pharmacy.builder());
    }


}