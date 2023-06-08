import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    > ul {
        justify-content: center;
    }
    @media (max-width: ${(props) => props.theme.mediaQueryMobile}) {
    }
`