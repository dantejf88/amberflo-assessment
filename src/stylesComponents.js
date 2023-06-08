import styled from 'styled-components'
import { Form } from 'antd'

export const Container = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 100px 30px;
    width: ${(props) => props.width || '100%'};
    max-width: ${(props) => props.maxWidth || '500px'};;
    @media (max-width: ${(props) => props.theme.mediaQueryMobile}) {
        padding: 20px;
    }
`

export const SubmitItem = styled(Form.Item)`
    margin-top: 50px;
    > div {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    @media (max-width: ${(props) => props.theme.mediaQueryMobile}) {
    }
`