tailwind.config = {      
    theme: {        
        extend: {          
            colors: {            
                gray: "#2e3440", 
                lightGray: "#3b4252",
                white: "#eceff4",
                red: "#bf616a",   
                green: "#a3be8c",
                blue: "#5e81ac",
                orange: "#d08770",
                red: "#bf616a",
                lightBlue: "#81a1c1",
                yellow: "#ebcb8b",
                purple: "#b48ead",
                blueGreen: "#8fbcbb"
            },
            fontFamily: {
                "title": ["Poppins"],
                "subtitle": ["Cabin"],
                "body": ["Source Sans Pro"]
            },
            fontSize: {
                "zero": "0"
            },
            screens: {
                "tablet": "560px"
                },      
            },
            keyframes: {
                bounce: {
                    "0%": { 
                        transform: "translate3d(0, 0, 0)" 
                    },
                    "100%": {
                        transform: "translate3d(0, -10px, 0)"
                    }
                }
            },
            animation: {
                bounce: "bounce 0.5s infinite alternate"
            }   
    }    
}  