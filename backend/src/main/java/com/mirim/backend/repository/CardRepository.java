package com.mirim.backend.repository;

public class CardRepository {
    public boolean idCheck(Integer id) {
        return id > 0;
    }

    public boolean isValidKeyword(String keyword) {
        return keyword.trim().isEmpty();
    }
}
