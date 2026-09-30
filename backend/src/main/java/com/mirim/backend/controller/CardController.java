package com.mirim.backend.controller;

import com.mirim.backend.dto.Card;
import com.mirim.backend.repository.CardRepository;
import com.mirim.backend.service.CardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CardController {
    CardService cardService = new CardService();
    CardRepository cardRepository = new CardRepository();

    @GetMapping("/api/cards")
    ResponseEntity<List<Card>> getCards() {
        return ResponseEntity.ok(cardService.getCardList    ());
    }

    @GetMapping("/api/cards/category")
    ResponseEntity<List<Card>> getCardsByCategory(@RequestParam("keyword") String keyword) {
        var cards = cardService.getCardsByCategory(keyword);

        if (cards == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(cards);
    }

    @GetMapping("/api/cards/search")
    ResponseEntity<List<Card>> getCardsByKeyword(@RequestParam("keyword") String keyword) {
        var cards = cardService.getCardsByKeyword(keyword);
        return ResponseEntity.ok(cards);
    }
    @GetMapping("api/cards/{id}")
    ResponseEntity<Card> getCardsById(@PathVariable Integer id) {
        var card = cardService.getCardById(id);
        if (!cardRepository.idCheck(id)) {
            return ResponseEntity.badRequest().build();
        }
        if (card == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(card);
    }
}
