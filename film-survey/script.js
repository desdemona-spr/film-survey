{\rtf1\ansi\ansicpg1254\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const form = document.getElementById('surveyForm');\
const results = document.getElementById('results');\
\
form.addEventListener('submit', function(e) \{\
    e.preventDefault();\
\
    const genre = form.genre.value;\
    const frequency = form.frequency.value;\
    const favorite = form.favorite.value;\
\
    // Checkboxlar\
    const characters = [];\
    form.querySelectorAll('input[name="characters"]:checked').forEach(c => \{\
        characters.push(c.value);\
    \});\
\
    // Sonu\'e7lar\uc0\u305  g\'f6ster\
    results.innerHTML = `\
        <h2>Sonu\'e7lar \uc0\u55356 \u57225 </h2>\
        <p><strong>Film T\'fcr\'fc:</strong> $\{genre\}</p>\
        <p><strong>Haftal\uc0\u305 k \u304 zleme:</strong> $\{frequency\}</p>\
        <p><strong>Favori Film:</strong> $\{favorite\}</p>\
        <p><strong>Favori Karakterler:</strong> $\{characters.join(', ')\}</p>\
    `;\
\});}