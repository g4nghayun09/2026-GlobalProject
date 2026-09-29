package com.mirim.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Card {
    int id;
    String title;
    String content;
    String category;
    String[] howto;
    Expressions[] expressions;
    String[] report;
    String imageUrl;

    public Card(int id, String title, String content, String category, String[] howto, Expressions[] expressions, String[] report, String imageUrl) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.howto = howto;
        this.expressions = expressions;
        this.report = report;
        this.imageUrl = imageUrl;
    }
}
