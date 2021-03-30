import Layout from "../components/Layout";
import styled from 'styled-components';
import Image from "next/image"




const Container = styled.div`
  display: flex;
  border: 3px solid ${props => props.color};
 
  justify-content: space-around;
  font-size: 1em;
  color: ${props => props.color};
`;

const Content = styled.div`
  align-self: center;
`;
const Team=()=>(
<Layout>
<div className="grid grid-cols-4 gap-4">


<Container>
<Content>
<Image
        src="/nesbit.png"
        alt="Picture of idel"
        width={200}
        height={200}
      />
<h3>La Marco Nesbit</h3>
<h4>CEO/Founder</h4>


</Content>
</Container>


<Container>
<Content>
<Image
        src="/maria.png"
        alt="Picture of mariah"
        width={200}
        height={200}
      />
<h3>Mariah Nesbit</h3>
<h4>President/Co-Founder</h4>


</Content>
</Container>


<Container>
<Content>
<Image
        src="/jay.jpg"
        alt="Picture of jay"
        width={200}
        height={200}
      />
<h3>Jackson Juma</h3>
<h4>Head of Cooperate Affairs</h4>


</Content>
</Container>

<Container>
<Content>
<Image
        src="/gabby.jpg"
        alt="Picture of gabriel"
        width={200}
        height={200}
      />
<h3>Gabriel Okomo</h3>
<h4>Head of Trade</h4>


</Content>
</Container>


<Container>
<Content>
<Image
        src="/idel.jpg"
        alt="Picture of idel"
        width={200}
        height={200}
      />
<h3>Edelqueen Achieng</h3>
<h4>Image Consultant</h4>


</Content>
</Container>


</div>
</Layout>
)
export default Team;