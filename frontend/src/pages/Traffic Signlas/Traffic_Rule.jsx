import Traffic_Rules_Card from "../../components/Traffic_Rules/Card/Traffic_Rules_Card";
import Traffic_Rules_Heading from "../../components/Traffic_Rules/Heading/Traffic_Rules_Heading";
import "./Traffic_Rule.css";
import Footer from "../../components/Footer/Footer";
export default function Traffic_Rule() {
  return (
    <>
      <div className="Traffic_Rule">
        <Traffic_Rules_Heading />
        <div className="Traffic_Rule_All_Card">
          <Traffic_Rules_Card
            image={
              "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/go-ahead-road-sign_ver_1.png"
            }
            name={"Go Ahead"}
          />
          <Traffic_Rules_Card
            image={
              "https://openclipart.org/image/2400px/svg_to_png/167093/StopSign-nofont.png"
            }
            name={"Stop"}
          />
          <Traffic_Rules_Card
            image={
              "https://cdn8.bigcommerce.com/s-5d127/images/stencil/1280x1280/products/172/427/FS-Yield-PedCross__33432.1318998545.jpg?c=2&imbypass=on"
            }
            name={"Pedestrian Crossing"}
          />
          <Traffic_Rules_Card
            image={
              "https://cdn11.bigcommerce.com/s-11317/images/stencil/1280x1280/products/791/3836/R104__15569.1265288933.jpg?c=2"
            }
            name={"No Entry"}
          />
          <Traffic_Rules_Card
            image={
              "https://theorytest.org.uk/wp-content/uploads/2021/01/maximum-speed-limit-sign-40-mph.png"
            }
            name={"Speed Limit"}
          />
          <Traffic_Rules_Card
            image={
              "https://static.vecteezy.com/system/resources/previews/002/306/707/original/u-turn-left-traffic-road-sign-free-vector.jpg"
            }
            name={"U-Turn"}
          />
          <Traffic_Rules_Card
            image={
              "https://static.grainger.com/rp/s/is/image/Grainger/3PMH9_AL01"
            }
            name={"No Parking"}
          />
          <Traffic_Rules_Card
            image={
              "https://static.grainger.com/rp/s/is/image/Grainger/3PMH9_AL01"
            }
            name={"No Parking"}
          />
          <Traffic_Rules_Card
            image={
              "https://static.grainger.com/rp/s/is/image/Grainger/3PMH9_AL01"
            }
            name={"No Parking"}
          />
          <Traffic_Rules_Card
            image={
              "https://static.grainger.com/rp/s/is/image/Grainger/3PMH9_AL01"
            }
            name={"No Parking"}
          />
          <Traffic_Rules_Card
            image={
              "https://static.grainger.com/rp/s/is/image/Grainger/3PMH9_AL01"
            }
            name={"No Parking"}
          />
          <Traffic_Rules_Card
            image={
              "https://static.grainger.com/rp/s/is/image/Grainger/3PMH9_AL01"
            }
            name={"No Parking"}
          />
        </div>
      
      </div>
 
     
    </>
  );
}
