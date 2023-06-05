package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FamousFiguresService {

    @Autowired
    FamousFiguresRepository famousFiguresRepository;

    public List<Long> getAllIds() {
        return famousFiguresRepository.getIds();
    }
}
