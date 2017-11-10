export default `
    .center{
        text-align: center;
    }
    .left{
        text-align: left;
    }
    .right{
        text-align: right;
    }
    html{
        height: 100%;
    }
    body{
        height: 100%;
        margin: 0;
    }
    *{
        font-family: 'Raleway', sans-serif;
    }
    .image-a-container{
        position: relative;
        width: 100%;
    }
    .image-a-overlay{
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        height: 100%; width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #F5F5F5;
    }
    .image-a-container:hover .image-a-overlay{
        opacity: 1;
    }
    .image-a-text{
        color: black;
        font-size: 2em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    .col-sm-padding-fix{
        padding: 0!important;
    }
`;
