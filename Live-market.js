/* =========================================
   FarmValu AI - Live Market Prices
========================================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#eef8ef;
    color:#333;
    padding-bottom:90px;
}

/* Header */

.header{
    background:linear-gradient(135deg,#1b5e20,#43a047);
    color:#fff;
    text-align:center;
    padding:30px 20px;
    border-bottom-left-radius:25px;
    border-bottom-right-radius:25px;
    box-shadow:0 5px 15px rgba(0,0,0,.2);
}

.header h1{
    font-size:30px;
    margin-bottom:8px;
}

.header p{
    font-size:16px;
}

/* Search */

.search-box{
    display:flex;
    gap:10px;
    margin:20px;
}

.search-box input{
    flex:1;
    padding:14px;
    border:2px solid #43a047;
    border-radius:12px;
    outline:none;
    font-size:16px;
}

.search-box button{
    background:#2e7d32;
    color:white;
    border:none;
    padding:14px 20px;
    border-radius:12px;
    cursor:pointer;
    transition:.3s;
}

.search-box button:hover{
    background:#1b5e20;
}

/* Market Cards */

#marketContainer{
    margin:20px;
}

.market-card{
    background:white;
    padding:20px;
    border-radius:18px;
    margin-bottom:18px;
    box-shadow:0 5px 15px rgba(0,0,0,.08);
    transition:.3s;
    border-left:6px solid #43a047;
}

.market-card:hover{
    transform:translateY(-5px);
}

.market-card h2{
    color:#2e7d32;
    margin-bottom:10px;
}

.market-card p{
    margin:6px 0;
    color:#555;
}

.price-up{
    color:green;
    font-weight:bold;
}

.price-down{
    color:red;
    font-weight:bold;
}

/* Footer */

footer{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background:white;
    display:flex;
    justify-content:space-around;
    padding:12px;
    box-shadow:0 -3px 10px rgba(0,0,0,.15);
}

footer button{
    background:#2e7d32;
    color:white;
    border:none;
    padding:12px 16px;
    border-radius:12px;
    cursor:pointer;
    font-size:14px;
}

footer button:hover{
    background:#1b5e20;
}

/* Mobile */

@media(max-width:600px){

.header h1{
    font-size:26px;
}

.search-box{
    flex-direction:column;
}

.search-box button{
    width:100%;
}

.market-card{
    padding:16px;
}

}
