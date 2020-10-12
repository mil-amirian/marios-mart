--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Nintendo Switch	29999	/images/switch_console.jpg	Get The Gaming System That Lets You Play The Games You Want, Wherever You Are, However You Like!	At home, Nintendo Switch™ rests in the Nintendo Switch Dock that connects the system to the TV and lets you play with family and friends in the comfort of your living room. By simply lifting Nintendo Switch from the dock, the system will instantly transition to portable mode, and the same great gaming experience that was being enjoyed at home now travels with you. The portability of Nintendo Switch is enhanced by its bright high-definition display. It brings the full home gaming system experience with you to the park, on an airplane, in a car, or to a friend’s apartment. This bundle includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy‑Con™ controllers—one red, one blue. It also includes all the extras you need to get started.
2	Nintendo Switch Lite	19999	/images/switch_lite.jpg	Nintendo Switch Lite is a compact, lightweight Nintendo Switch system dedicated to handheld play.	With a built-in +Control Pad and a sleek, unibody design, it’s great for on-the-go gaming. Nintendo Switch Lite is compatible with the robust library of Nintendo Switch games that support handheld mode. If you’re looking for a gaming system all your own, Nintendo Switch Lite is ready to hit the road whenever you are!
3	NES Controllers	5999	/images/nesc_package.jpg	With a Nintendo Switch Online membership, you can play enhanced NES™ games the way they're meant to be played—using full-size Nintendo Entertainment System™ controllers!	Available for purchase only by Nintendo Switch Online members*, this 2-pack of wireless controllers offers the perfect way to play these classic NES games online either competitively or cooperatively. Rechargeable Battery – The Nintendo Entertainment System controllers can be paired and used wirelessly with Nintendo Switch Lite. However, a Nintendo Switch console with detached Joy-Con is required to charge the controllers. Two Controllers – Available as a set of two controllers for competitive and cooperative fun.
4	SNES Controller	2999	/images/snescontroller.jpg	Now you’re playing with super power!	Enjoy enhanced Super NES™ games the way they're meant to be played—using a full-size Super NES™ style controller! Available for purchase only by Nintendo Switch Online members, this wireless controller offers the perfect way to play these classic Super NES games. What’s in the box — One Super Nintendo Entertainment System Controller and one USB cable. Recharging options — Use the included USB cable or a Nintendo Switch AC adapter.
6	Pro Controller	6999	/images/procontroller.jpg	 Take your game sessions up a notch with the Pro Controller for Nintendo Switch™.	Its traditional design includes motion controls, two analog control sticks and the ability to read Amiibo figures, and a USB-C cable is provided for charging. This Nintendo Switch pro controller works with any mode, whether the console is docked or undocked.
7	Joy-Con Grip	1999	/images/joycon-holder.jpg	 Combine the left and right Joy‑Con™ into one larger controller with this handy grip.	You can combine the left and right sides to create one large controller that is easier to handle, and the ergonomic design keeps your hand comfortable during all-night gaming sessions. This Nintendo Joy-Con grip protects your controllers from daily wear and tear.
8	NES Classic Edition	4999	/images/nes.jpg	 Play the System that Started it All!	Remember your first Goomba stomp? The NES Classic Edition system is a miniaturized version of the groundbreaking NES, originally released in 1985. Just plug the NES Classic Edition into your TV, pick up that gray controller, and rediscover the joy of NES games. The NES Classic Edition is now available as an Authentic Nintendo Refurbished set only from Nintendo, and it comes with our standard one year warranty. Although it may have minor cosmetic blemishes, it is guaranteed to be fully functional. We think you will find the standards for Authentic Nintendo Refurbished Products are VERY high.
9	Super NES Classic Edition	6999	/images/snes.jpg	 You’ve Been Waiting a Long Time For This!	Trust us, it was worth the wait. The Super NES Classic Edition system looks and feels just like the original ’90s home console, except it’s super small. Play 20 classic Super NES games plus *gasp* the ever-before-released Star Fox™ 2 game! The Super NES Classic Edition is now available as an Authentic Nintendo Refurbished set only from Nintendo, and it comes with our standard one year warranty. Although it may have minor cosmetic blemishes, it is guaranteed to be fully functional. We think you will find the standards for Authentic Nintendo Refurbished Products are VERY high.
10	Mario Kart 8 Deluxe	5999	/images/m_kart.jpg	 Race and Battle Your Friends in the Definitive Version of Mario Kart 8!	Hit the road with the definitive version of Mario Kart™ 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U™ version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.! Add to the fun with a Joy-Con™ Wheel (available separately)!
11	Super Smash Bros. Ultimate	5999	/images/m_smash.jpg	 A New Super Smash Bros. Game with New Fighters, Stages, and More!	Legendary game worlds and fighters collide in the ultimate showdown—a new entry in the Super Smash Bros. series for the Nintendo Switch system! New fighters, like Inkling from the Splatoon series and Ridley from the Metroid series, make their Super Smash Bros. series debut alongside every Super Smash Bros. fighter in the series…EVER! Faster combat, new items, new attacks, new defensive options, and more will keep the battle raging whether you’re at home or on the go.
5	Ostrich Pillow	9900	/images/ostrich-pillow.jpg	Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.	Experience the revolutionary power nap pillow in your home office, living room, and even your bed. A cocoon-like pillow that helps block out light, and provide absolute comfort to disconnect from the world. Lovingly hand made using a dreamily soft high quality combination of viscose and elastomer, together with the next generation coated micro bead filling create a perfect partnership, helping you drift calmly into relaxation mode. Slip on this cozy cocoon or simply simply use it as a huggable lounge pillow at home to take a break from your hectic schedule.
12	New Super Mario Bros. U Deluxe	5999	/images/m_deluxe.jpg	 Join Mario, Luigi, and pals for single-player or multiplayer fun anytime, anywhere!	Take on two family-friendly, side-scrolling adventures with up to three friends* as you try to save the Mushroom Kingdom. Includes the New Super Mario Bros. U and harder, faster New Super Luigi U games — both of which include Nabbit and Toadette as playable characters! Two games in one, for double the fun! Simple, straightforward controls, new playable characters optimized for younger and less-experienced players, and a wealth of bonus content—like a Hints gallery and helpful reference videos**—make this a perfect choice for anyone looking to introduce their family to the wonderful world of Mario. All a player needs is one Joy-Con™ controller, so two people can team up right out of the box! Tackle 164 platforming courses in the two main game modes and enjoy extra replayability with three additional game modes in which you can also play as a Mii™ character: Challenges, Boost Rush, and Coin Battle!
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 76, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 104, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 24, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

