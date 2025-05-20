document.addEventListener( "DOMContentLoaded" , function() {
    const results = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
    ]
    console.log(results)

    const container = document.querySelector('.summary');
    const items = container.querySelectorAll('.summary__item');

    items.forEach((item, index) => {
        const result = results[index];

        if(result){
            item.querySelector('.category').textContent = result.category;
            item.querySelector('.category__result>span').textContent = result.score;
            item.querySelector('.icon').setAttribute('src', result.icon);
        }
    })
}) ;