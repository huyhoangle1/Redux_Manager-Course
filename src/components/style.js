import styled from "styled-components";

export const CourseForm = styled.div`
      table{
        color:red;
        text-align:center;
        .nameInfo{
            display:flex;
            align-items:center;
            justify-content:center;
            img{
                width:25px;
                height:25px;
            }
            span{
                margin:0 15px;
            }
        }
        .buttonHandle{
            Button{
                width:100px;
            }
        }
        .progress{
            height:90px;
            max-height:1000px;
        }
      }
    `;

