package com.mirim.backend.repository;

import com.mirim.backend.dto.Card;

import java.util.List;

public class CardRepository {
    public boolean idCheck(Integer id) {
        return id > 0;
    }

    public boolean keywordCheck(String keyword) {
        return !keyword.trim().isEmpty();
    }
}
