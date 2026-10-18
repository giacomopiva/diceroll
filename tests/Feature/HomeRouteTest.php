<?php

test('home page renders', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertSee('Crea un tavolo');
});

test('welcome page renders', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertSee('Tavolo dei Dadi');
});
