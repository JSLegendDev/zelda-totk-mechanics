kaboom({width: 800, height: 600})

scene("ultrahand-playground", () => {
    setGravity(1000)
    
    const platform = add([
        rect(400, 50), 
        pos(10, 500), 
        area(), 
        outline(3),
        body({isStatic: true})
    ])

    const skyPlatform = add([
        rect(300, 50),
        pos(400, 100),
        area(),
        outline(3),
        body({isStatic: true})
    ])

    const player = add([
        rect(50, 50),
        pos(300, 400),
        area(),
        outline(3),
        body(),
        {
            speed: 300
        }
    ])

    onKeyDown('a', () => {
        player.move(-player.speed, 0)
    })

    onKeyDown('d', () => {
        player.move(player.speed, 0)
    })

    onKeyPress('w', () => {
        if (player.isGrounded()) {
            player.jump()
        }
    })

    for (let i = 0; i < 4; i++) {
        add([
            rect(150, 50),
            pos(10, 100),
            area(),
            outline(3),
            body(),
            "wood"
        ])
    }
})

scene("fuse-playground", () => {})

scene("ascend-playground", () => {})

scene("recall-playground", () => {})

go("ultrahand-playground")