package com.example.demo.reporsitory;

import com.example.demo.entity.Laboratory.ReportDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

@EnableJpaRepositories
@Repository
public interface LaboratoryRepository extends JpaRepository<ReportDetails, Event.ID> {
}

