package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FamousFiguresRepository extends JpaRepository<Long, String> {


    @Query(value = "SELECT id FROM famous_figures", nativeQuery = true)
    List<Long> getIds();

}
