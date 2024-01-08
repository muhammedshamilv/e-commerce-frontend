import styled from '@emotion/styled';

export const Button = styled.button`
  .btn2 span:first-child {
    transform: translateX(-101%);
    transition: transform 0.3s ease-in;
  }
  .btn2:hover span {
    transform: translateX(0);
  }
`;

// export const Logo = styled.div`
//   font-family: 'Bangers', cursive;
// `;

// export const Textarea = styled.div`
//   .comment-text-area {
//     width: calc(100% - 45px);
//     height: 500px;
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 12px;
//   }
//   .comment-text-area-heading {
//     width: calc(100% - 45px);
//     height: 40px;
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 12px;
//   }

//   .textinput {
//     width: 100%;
//     height: 100%;
//     outline: none;
//     border: 1px solid #f0f0f0;
//   }
// `;
