--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: back_ends; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE back_ends (
    id integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: back_ends_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE back_ends_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: back_ends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE back_ends_id_seq OWNED BY back_ends.id;


--
-- Name: front_ends; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE front_ends (
    id integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: front_ends_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE front_ends_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: front_ends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE front_ends_id_seq OWNED BY front_ends.id;


--
-- Name: grad_chats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE grad_chats (
    id integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: grad_chats_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE grad_chats_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: grad_chats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE grad_chats_id_seq OWNED BY grad_chats.id;


--
-- Name: meetups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE meetups (
    id integer NOT NULL,
    meetup_id character varying,
    name character varying,
    link character varying,
    description text,
    city character varying,
    state character varying,
    members character varying,
    image_id character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: meetups_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE meetups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: meetups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE meetups_id_seq OWNED BY meetups.id;


--
-- Name: refile_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE refile_attachments (
    id integer NOT NULL,
    oid oid NOT NULL,
    namespace character varying NOT NULL,
    created_at timestamp without time zone DEFAULT ('now'::text)::timestamp without time zone
);


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE refile_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE refile_attachments_id_seq OWNED BY refile_attachments.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE users (
    id integer NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip inet,
    last_sign_in_ip inet,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    profile_image_id character varying,
    provider character varying,
    uid character varying,
    name character varying,
    image_id character varying,
    meetup_token character varying,
    meetup_id character varying,
    authentication_token character varying(30)
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: back_ends id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY back_ends ALTER COLUMN id SET DEFAULT nextval('back_ends_id_seq'::regclass);


--
-- Name: front_ends id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY front_ends ALTER COLUMN id SET DEFAULT nextval('front_ends_id_seq'::regclass);


--
-- Name: grad_chats id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY grad_chats ALTER COLUMN id SET DEFAULT nextval('grad_chats_id_seq'::regclass);


--
-- Name: meetups id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY meetups ALTER COLUMN id SET DEFAULT nextval('meetups_id_seq'::regclass);


--
-- Name: refile_attachments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments ALTER COLUMN id SET DEFAULT nextval('refile_attachments_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: back_ends back_ends_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY back_ends
    ADD CONSTRAINT back_ends_pkey PRIMARY KEY (id);


--
-- Name: front_ends front_ends_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY front_ends
    ADD CONSTRAINT front_ends_pkey PRIMARY KEY (id);


--
-- Name: grad_chats grad_chats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY grad_chats
    ADD CONSTRAINT grad_chats_pkey PRIMARY KEY (id);


--
-- Name: meetups meetups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY meetups
    ADD CONSTRAINT meetups_pkey PRIMARY KEY (id);


--
-- Name: refile_attachments refile_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments
    ADD CONSTRAINT refile_attachments_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_refile_attachments_on_namespace; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_namespace ON refile_attachments USING btree (namespace);


--
-- Name: index_refile_attachments_on_oid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_oid ON refile_attachments USING btree (oid);


--
-- Name: index_users_on_authentication_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_authentication_token ON users USING btree (authentication_token);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_email ON users USING btree (email);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON users USING btree (reset_password_token);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO schema_migrations (version) VALUES
('20170107170247'),
('20170107174710'),
('20170107174730'),
('20170107205405'),
('20170108065127'),
('20170108065340'),
('20170108065521'),
('20170108065750'),
('20170108070036'),
('20170108070205'),
('20170111190435'),
('20170112161102');


