import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
	<Layout>
		<h1>About Stone-Tiles</h1>
		<p>
			A stone coated metal roof is a roof made from steel or some other
			metal; the metal is then coated with stone chips and attached to the
			steel with an acrylic film. The goal is a more durable roof that
			still retains the aesthetic advantages of a more traditional roofing
			material
		</p>
		<h2>History</h2>
		<p>
			{" "}
			Stone coated metal roofing was refined during and after World War II
			in the United Kingdom, when the government requested materials that
			would protect corrugated steel roofs from the harsh climate. A
			coating of bitumen and subsequent covering by sand, stone or other
			materials proved effective at protecting the metal roofs and serving
			as camouflage against potential attack.
		</p>
		<p>
			In 1954, L.J. Fisher, an industrialist from New Zealand, secured the
			rights to produce stone-coated metal roofing outside Great Britain.
			The company he founded, AHI Roofing, operates the largest metal
			roofing factory in the world, and has continued to make changes to
			the metal roofing product.
		</p>
		<h2> Advantages of stone roofs</h2>
		<p>
			<span>Appearance</span>:Stone Roofs have a beautiful appearance and
			therefore are well recommended by architects for attractive look and
			great designs.
		</p>
		<p>
			<span> Strength</span>: Stone Roofs are strong, durable and can hold
			out much more than traditional roofs.
		</p>
		<p>
			<span> Water Resistance</span>: They are water resistant and can
			hence withstand tough weather changes.
		</p>
		<Link to="/">&larr; back to home</Link>
	</Layout>
);
