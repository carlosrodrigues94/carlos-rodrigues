import { FC } from "react";

export const SectionChallenges: FC = () => {
  return (
    <section className="w-7xl m-20 ml-auto mr-auto border-0 p-2 rounded-sm">
      <h2 className="ml-auto mr-auto text-2xl mb-8">Challenges</h2>

      <p>
        One of the biggest challenges in my career was building a{" "}
        <b>Payment Gateway</b> solution responsible for handling all charges for
        the company's main service. This solution needed to support transactions
        from over 200,000 clients and scale to accommodate even more while
        ensuring data security. Together with my team, we decided to implement a
        microservices architecture using <b>Event-Driven Design</b> and{" "}
        <b>multi-tenancy</b> for the database, with asynchronous communication
        powered by <b>Apache Kafka</b> and <b>NestJS</b> as the core framework.
        The project was a success and continues to power the products at{" "}
        <a href="https://wisereducacao.com/">Wiser</a>.
      </p>

      <p className="mt-10">
        At Debex Group, my team and I worked on synchronizing a Web and Mobile
        Platform designed to help companies grow their customer base. Businesses
        could launch discount coupons on a map within a specific range, allowing
        nearby mobile users to view and capture them. These coupons could then
        be validated in-store to build customer loyalty. Key challenges included
        calculating coupon <b>geolocation</b> using latitude and longitude, and
        <b> clustering coupons</b> when zooming out on the map. The platform
        still successfully supports over 10,000 clients across Brazil, all of
        them are using <a href={"https://www.bumstores.com/"}> Bum Store</a>.
      </p>

      <p className="mt-10">
        Rocket.Chat serves a wide range of clients. In my team, I worked on
        platform improvements to ensure the system could scale to support over 2
        million users while maintaining reliable integrations with various
        providers such as <b>Microsoft Teams</b>, <b>Google Authenticator </b>
        and many others. Rocket.Chat is an open-source chat platform powered by
        a multicultural, globally distributed team.
        <a href="https://www.rocket.chat/"> Rocket.Chat</a>.
      </p>

      <p className="mt-10">
        One of the key challenges I tackled at SysMap (allocated to Natura &CO)
        came after a denial-of-service attack that resulted in hundreds of
        thousands of dollars in losses. The solution I delivered involved
        validating the user ID and phone number using a <b>DynamoDB</b> table,
        where I configured a <b>GSI</b> with a composite key and a <b>TTL</b> of
        one day. This validation process, combined with SMS provider checks,
        ensured that both the user and destination phone number were authorized
        to receive SMS messages. The solution is currently in production,
        supporting all existing and new Natura &CO clients,over 14 million
        users.
        <a href="https://www.natura.com.br/"> Natura &CO</a>.
      </p>
    </section>
  );
};
