var qe=Object.defineProperty;var Xe=(m,e,t)=>e in m?qe(m,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[e]=t;var pe=(m,e,t)=>Xe(m,typeof e!="symbol"?e+"":e,t);import{a as Y,O as Ke,k as ve,m as ne,q as j,U as De,h as G,r as Je,H as Ze,N as $e,s as Ee,C as Re,l as et,t as tt,u as ye,v as st,D as it,E as ot,b as at,w as nt,x as rt,c as lt,M as ct,y as dt,z as ft,j as oe,V as A,J as be,K as ht,L as ut,X as pt,Y as gt,Z as mt,o as vt,_ as xt,$ as wt,a0 as _t,S as yt,P as bt,W as Mt,p as ge,a1 as St,a2 as Ct,a3 as Dt,a4 as Et,a5 as Me}from"./Dj-vhf08.js";import{O as Rt}from"./CsvSSBkb.js";import{r as Pt,f as Tt,l as Lt,c as At,b as Ut,e as Bt,o as zt,g as ae}from"./D9jr4d1d.js";import{u as Se}from"./DaEylGrK.js";const It={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class q{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nt=new Ke(-1,1,1,-1,0,1);class Ft extends ve{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const Gt=new Ft;class Pe{constructor(e){this._mesh=new Y(Gt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ht extends q{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof j?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=De.clone(e.uniforms),this.material=new j({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pe(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ce extends q{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const u=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let v,U;this.inverse?(v=0,U=1):(v=1,U=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),l.buffers.stencil.setFunc(u.ALWAYS,v,4294967295),l.buffers.stencil.setClear(U),l.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(u.EQUAL,1,4294967295),l.buffers.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),l.buffers.stencil.setLocked(!0)}}class kt extends q{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ot{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new G);this._width=i.width,this._height=i.height,t=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ze}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ht(It),this.copyPass.material.blending=$e,this.clock=new Ee}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let u=0,l=this.passes.length;u<l;u++){const v=this.passes[u];if(v.enabled!==!1){if(v.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(u),v.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),v.needsSwap){if(i){const U=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(U.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),X.setFunc(U.EQUAL,1,4294967295)}this.swapBuffers()}Ce!==void 0&&(v instanceof Ce?i=!0:v instanceof kt&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,u=this._height*this._pixelRatio;this.renderTarget1.setSize(i,u),this.renderTarget2.setSize(i,u);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(i,u)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wt extends q{constructor(e,t,i=null,u=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=u,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){const u=e.autoClear;e.autoClear=!1;let l,v;this.overrideMaterial!==null&&(v=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=v),e.autoClear=u}}const me={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;

		void main() {

			vUV = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			float dist = radius * 0.66;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height );
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				r = blendColour( r, colour.r, blending );
				g = blendColour( g, colour.g, blending );
				b = blendColour( b, colour.b, blending );

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				gl_FragColor = vec4( r, g, b, 1.0 );

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};class Vt extends q{constructor(e){super(),this.uniforms=De.clone(me.uniforms),this.material=new j({uniforms:this.uniforms,fragmentShader:me.fragmentShader,vertexShader:me.vertexShader});for(const t in e)e.hasOwnProperty(t)&&this.uniforms.hasOwnProperty(t)&&(this.uniforms[t].value=e[t]);this._fsQuad=new Pe(this.material)}render(e,t,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Qt={key:0,id:"picosoft-anim",class:"fixed top-0 z-0"},Zt={__name:"PicosoftAnim",setup(m){const e=Pt(null),t={grid:{segmentsX:123,segmentsY:40},texture:{path:"/images/Picosoft-brand.png",res:new G(2906,896)},nodes:{count:423,connectionFactor:.1723,maxConnection:69,speedFast:9,speedSlow:2,getBoundingMinDist:()=>t.nodes.getBoundingMaxDist()/2,getBoundingMaxDist:()=>Math.max(50,Math.floor(window.innerWidth*.05)),section:{getWidth:()=>t.nodes.getBoundingMaxDist()*2,getHeight:()=>t.nodes.getBoundingMaxDist()*2,getDivisionsX:()=>Math.floor((Math.max(300,window.innerWidth)+2*t.nodes.section.getWidth())/t.nodes.section.getWidth()),getDivisionsY:()=>Math.floor((Math.max(600,window.innerHeight)+2*t.nodes.section.getHeight())/t.nodes.section.getHeight())}},colors:{node:9211020,line:14540253,bg:16119260}},i={};function u(d,r){const o=d.width/d.height,a=r.width/r.height;let c={x:1,y:1},y={x:0,y:0};return o>a?(c.x=a/o,y.x=(1-c.x)*.5):(c.y=o/a,y.y=(1-c.y)*.5),{scale:c,offset:y,canvasSize:d,imageSize:r}}function l(d,r,o,a,c){return d>32?a+(c-a)*((d-r)/(o-r)):d}function v(d,r,o,a,c){return a+(c-a)*((d-r)/(o-r))}function U(d,r){d.length()>r&&(d.normalize(),d.multiplyScalar(r))}class X{constructor(r,o,a,c,y,P,T,w){pe(this,"boundingX");pe(this,"boundingY");this.pos=new A(r,o,a),this.dir=new A(c,y,P),this.speed=this.dir.length(),this.vel=this.dir.clone(),this.acceleration=new A,this.scale=oe.randFloat(.5,2.8)+1,this.moveFn=T,this.updateFn=w}move(){this.moveFn&&this.moveFn(this)}update(r){this.updateFn&&r&&this.updateFn(this,r)}}async function Te(){const r=await(await fetch("/images/glow_image.pcm")).arrayBuffer(),o=new DataView(r),a={idSize:{offset:0},imageType:{offset:1},palleteSize:{offset:2},palleteEntryDepth:{offset:4},x:{offset:6},width:{offset:8},y:{offset:10},height:{offset:12},mapType:{offset:14},colorDepth:{offset:16},descriptor:{offset:17},alpha:{offset:18},r:{offset:20},g:{offset:24},b:{offset:28}};o.getUint8(a.idSize.offset,!0),o.getUint8(a.imageType.offset,!0),o.getUint16(a.palleteSize.offset,!0),o.getUint16(a.palleteEntryDepth.offset,!0),o.getUint16(a.x.offset,!0);const c=o.getUint16(a.width.offset,!0);o.getUint16(a.y.offset,!0);const y=o.getUint16(a.height.offset,!0);o.getUint16(a.mapType.offset,!0);const P=o.getUint8(a.colorDepth.offset,!0);o.getUint8(a.descriptor.offset,!0),o.getUint16(a.alpha.offset,!0),o.getUint32(a.r.offset,!0),o.getUint32(a.g.offset,!0),o.getUint32(a.b.offset,!0);const T=1*c*y*P/8,w=a.b.offset+4,M=new Uint8Array(T/4);for(let g=0;g<M.length;g+=4)M[g+0]=l(o.getUint8(w+g),0,5e3,-255,2200),M[g+1]=l(o.getUint8(w+g+1),0,5e3,-255,2200),M[g+2]=l(o.getUint8(w+g+2),0,5e3,-255,2200),M[g+3]=o.getUint8(w+g+3);const _=new Ct(M,c,y,Dt);return _.type=Et,_.minFilter=Me,_.magFilter=Me,_.needsUpdate=!0,_}async function Le(){const d=i.view.scene;i.textures={};const{scale:r,canvasSize:o}=u({width:p(),height:x()},{width:3466,height:1876});i.textures.eggCo=await i.loaders.textureLoader.loadAsync(ae("/assets/img/mczvc-ws.png"));const a=new ge(o.width*r.x,o.height*r.y),c=new ye({map:i.textures.eggCo,transparent:!0,shininess:0,roughness:.9,metalness:1.8}),y=new Y(a,c);y.position.set(-p()*1.25+o.width*r.x,Math.max(Math.max(x()*.8,723)-o.height*r.y,o.height*r.y-380),200),d.add(y);const{scale:P,canvasSize:T}=u({width:p()*1.7,height:x()},{width:9772,height:4167});i.textures.emailMe=await i.loaders.textureLoader.loadAsync(ae("/assets/img/email-me-at.png"));const w=new ge(T.width*P.x,T.height*P.y),M=new St({color:6710886,map:i.textures.emailMe}),_=new Y(w,M);_.position.set(0,Math.max(x()*.8,683)-T.height*P.y,-10),d.add(_),i.geometry={...i.geometry||{},emailMe:_},i.positions={emailMe:new A().copy(_.position)};const g=i.loaders.textureLoader.load(t.texture.path);i.textures.logoTexture=g;const B=t.texture.res,[C,K]=S(),re=t.grid.segmentsX,J=t.grid.segmentsY,Z=i.gridGeo=new ge(C,K,re,J);i.gridGeo=Z;const R=i.gridMat=new j({vertexShader:`
uniform float uTime;
uniform vec2 uMouse;
varying float vHeight;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec3 p = position;
  float freq = 0.8;
  float amp = 22.0;
  float t = uTime * 0.6;

  p.z += sin((p.x * 0.008) * freq + t) * amp * (0.5 + 0.5 * uv.y);
  p.z += cos((p.y * 0.012) * freq - t*0.7) * (amp*0.6) * (0.5 + 0.5 * uv.x);
  // tiny mouse ripple
  float d = distance(uv, uMouse * 0.5 + vec2(0.25));
  p.z += (0.0 + 18.0 * exp(-12.0 * d) * sin(t*3.0));
  vHeight = p.z;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,fragmentShader:`
uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uTexResolution;
varying float vHeight;
uniform vec2 uMouse;
varying vec2 vUv;
uniform float uGlowIntensity;

vec2 containUV(vec2 uv, vec2 canvas, vec2 image) {
  float canvasRatio = canvas.x /canvas.y;
  float imageRatio = image.x / image.y;
  vec2 scale = vec2(1.0);
  vec2 offset = vec2(0.0);

  if (canvasRatio > imageRatio) {
    // Canvas is wider to fit by height
    scale.x = imageRatio / canvasRatio;
    offset.x = (1.0 - scale.x) * 0.5;
  } else {
    // Canvas is taller -> fit by width
    scale.y = canvasRatio / imageRatio;
    offset.y = (1.0 - scale.y) * 0.5;
  }

  return uv * scale + offset;
}

void main(){
  // texturing
  // Compute "contain" UV
  vec2 contained = containUV(vUv, uResolution, uTexResolution);

  vec4 tex = vec4(0.0);//texture2D(uTexture, vUv);
  if (contained.x >= 0.0 && contained.x <= 1.0 && contained.y >= 0.0 && contained.y <= 1.0) {
    tex = texture2D(uTexture, contained);
  }
  // color ramp based on height and y
  float h = (vHeight + 60.0) / 80.0;
  vec3 colA = vec3(0.02, 0.05, 0.08);
  vec3 colB = vec3(0.35, 0.55, 0.9);
  vec3 color = mix(colA, colB, smoothstep(0.0, 1.0, h));
  // soft vignette
  float vig = smoothstep(0.0, 0.8, length(vUv - vec2(0.5)));

  float dist = distance(vUv, uMouse);
  float glow = exp(-dist * 5.0) * 2.0;

  color *= (1.0 - vig*0.45) * glow * uGlowIntensity;
  vec3 finalColor = mix(color, tex.rgb, tex.a);
  gl_FragColor = vec4(finalColor, 0.85);
}`,uniforms:{uTime:{value:0},uMouse:{value:new G(-1,-1)},uTexture:{value:g},uTexResolution:{value:B},uResolution:{value:new G(...S())},uGlowIntensity:{value:1.65}},side:be,transparent:!0,depthWrite:!1});i.gridMat=R;function S(){const{scale:I,canvasSize:$}=u({width:p()*2,height:x()},{width:B.x,height:B.y});return[$.width*I.x,$.height*I.y]}i.functions={computeTextureCanvasSize:S};const D=new Y(Z,R);D.rotation.x=-.45,D.position.z=0,D.position.y=-x()+x()*.45,d.add(D)}const p=()=>window.innerWidth,x=()=>window.innerHeight;function Ae(){const d=new yt,r=new bt(45,window.innerWidth/window.innerHeight,1,2e3),o=new Mt({antialias:!0,dithering:!1,depth:!0,depthBuffer:!0,depthSize:16}),a=new Rt(r,o.domElement);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(t.colors.bg,1),o.state.buffers.stencil.setTest(!1);const c=o.getContext();return c.disable(c.CULL_FACE),c.clearDepth(1),c.blendFunc(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA),c.enable(c.BLEND),r.position.z=1720,{scene:d,camera:r,renderer:o,controls:a}}async function Ue(d){const r=new et;i.loaders={textureLoader:r};const{scene:o,camera:a,renderer:c,controls:y}=i.view=Ae();await Le(),d.appendChild(c.domElement),y.enabled=!1,y.update();let P=new tt(18,8,150,20),T=new ye({metalness:1,roughness:0,envMapIntensity:1});const w=new Y(P,T);w.position.set(-p()*.85,x()*.8,100),w.scale.multiplyScalar(4),o.add(w);const M=new st(c);M.compileEquirectangularShader(),it.onLoad=function(){M.dispose()};let _;i.textures.reflectionMapping=i.loaders.textureLoader.load(ae("/assets/img/equirectangular.png"),function(s){s.mapping=ot,s.colorSpace=at,_=M.fromEquirectangular(s)}),o.background=i.loaders.textureLoader.load(ae("/assets/img/about-me.jpg"));const g=new nt(16777215,p()<600?220:p()<865?p()*.35:p()*.3125);g.position.set(p(),-x()/2,70),g.castShadow=!0,g.shadow.camera.zoom=4,o.add(g);const B=new rt(16777215,1);B.power=2e3,B.position.set(0,0,1e3),a.lookAt(0,x(),0),a.add(B);const C=Math.min(t.nodes.count,Math.floor(p()*.6)),K=()=>Math.min(window.innerWidth*t.nodes.connectionFactor*.9,t.nodes.maxConnection),re=t.nodes.speedSlow,J=new lt(2.6+(p()-1)*.0018,8,8),Z=new ct({wireframe:!0,fog:!1,color:t.colors.node}),R=new dt(J,Z,C);o.add(R);const S=new ft,D=Array.from({length:C},()=>new X(Math.random()*window.innerWidth,(Math.random()-.5)*window.innerHeight*2,Math.abs(Math.random()-.6)*K(),oe.randFloat(-.1,.25*Math.max(3,p()*.001)),oe.randFloat(-.1,.25*Math.max(3,x()*.001)),oe.randFloat(-.95,.4),s=>{s.dir.add(s.vel),s.dir.setLength(s.speed),s.pos.x=s.pos.x+s.dir.x,s.pos.y=s.pos.y+t.nodes.speedFast*.23*s.dir.y,s.pos.z=s.pos.z+s.dir.z,Math.abs(s.pos.x)>window.innerWidth*.8&&(s.pos.x=-p()*.25),Math.abs(s.pos.y)>x()&&(s.pos.y=-x(),s.dir.y=Math.abs(s.dir.y)*1.7),s.pos.z>150?s.dir.z=-23:s.pos.z<-60&&(s.dir.z=30)},(s,f)=>{let n=0;const h=new A;for(let E of f){const V=s.pos.distanceTo(E.pos),L=V<t.nodes.getBoundingMinDist(),te=V<t.nodes.getBoundingMaxDist();if(E!==s&&te)if(h.add(E.pos),h.sub(s.pos),L){n++;const se=v(V,0,Math.max(35,window.innerWidth*.1),-.01,-.001);h.multiplyScalar(se)}else h.multiplyScalar(5e-4)}n>0&&(h.divideScalar(n),h.sub(s.vel)),s.acceleration.add(h),s.vel.add(s.acceleration),U(s.vel,s.speed),s.acceleration.multiplyScalar(0)})),I=new ve,$=new Float32Array(C*3),Be=new Float32Array(C);I.setAttribute("position",new ne($,3)),I.setAttribute("alphas",new ne(Be,1));const z=new j({uniforms:{colorTexture:{value:await Te()},sensitivity:{value:99/255},tint:{value:new A(14,244,251)}},vertexShader:`
    attribute vec4 color;
    attribute float alphas;
    // varying vec4 v_color;
    varying float v_alpha;

    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
      gl_PointSize = abs(position.z - 16.0)*alphas/120.0 * 32.0;
      // v_color = color;
      v_alpha = alphas;
    } `,fragmentShader:`
    precision mediump float;
    // varying vec4 v_color;
    varying float v_alpha;
    uniform float sensitivity;
    uniform vec3 tint;
    uniform sampler2D colorTexture;

    void main() {
      vec4 texColor = texture2D(colorTexture, gl_PointCoord);

      gl_FragColor = vec4(tint.rgb, v_alpha * sensitivity) * vec4(texColor.rgb, texColor.a);
    } `,transparent:!0,depthWrite:!1,depthTest:!1,side:be});z.blending=ht,z.blendSrc=ut,z.blendDst=pt,z.blendEquation=gt,z.transparent=!0,z.depthFunc=mt;const H=new vt(I,z);o.add(H),D.forEach((s,f)=>{S.position.copy(s.pos),S.scale.setScalar(s.scale),S.updateMatrix(),R.setMatrixAt(f,S.matrix)}),R.instanceMatrix.needsUpdate=!0;function ze(s){if(D.forEach(n=>{if(n.move(),s<=120){n.boundingX=Math.round(n.pos.x/t.nodes.section.getWidth())+1,n.boundingY=Math.round(n.pos.y/t.nodes.section.getHeight())+1;const h=N.get(n.boundingX)||new Map([[n.boundingY,{nodes:[]}]]),E=h.get(n.boundingY)||{nodes:[]};E&&E.nodes.push(n),h.set(n.boundingY,E),N.set(n.boundingX,h)}}),s>120)return new Promise(n=>{n()});const f=Math.floor(s%8);(f===0||f===1||f===3||f===4||f===6||f===7)&&N.entries().map(([,n])=>{n.entries().map(([,h])=>{h.nodes&&h.nodes.forEach(E=>{E.update(h.nodes)})}).forEach(()=>{})}).forEach(()=>{});for(const[,n]of N.entries())for(const[,h]of n.entries())h.nodes=[];return new Promise(n=>{n()})}const N=new Map;for(let s=0;s<t.nodes.section.getDivisionsX();s++){N.set(s,new Map);for(let f=0;f<t.nodes.section.getDivisionsY();f++){const n=t.nodes.section.getWidth(),h=t.nodes.section.getHeight();N.get(s).set(f,{x:s*n-n,y:f*h-h,w:n,h,nodes:[]})}}const Ie=new xt({color:t.colors.line,transparent:!0,opacity:.6}),k=new ve,Ne=new Float32Array(C*C*3);k.setAttribute("position",new wt(Ne,3));const Fe=new _t(k,Ie);o.add(Fe);function Ge(s,f){var te,se;const n=s.attributes.position.array,h=f.attributes.position.array,E=f.attributes.alphas.array,V=K();let L=0;for(let b=0;b<C;b++){const Q=(te=D[b])==null?void 0:te.pos,de=Q.z,ie=D[b].scale+Math.sin(de*.1*re*.5+b)*2.1,fe=255/(Math.sin(.1-ie*(1-de*.01))*155),Qe=new Re(1-fe,fe,fe);S.scale.set(ie,ie,ie),S.position.copy(Q),S.updateMatrix(),R.setMatrixAt(b,S.matrix);const he=b*3;h[he+0]=Q.x,h[he+1]=Q.y,h[he+2]=Q.z,E[b]=(de+90)/255;const Ye=D[b].pos;for(let ue=b+1;ue<C;ue++){const je=(se=D[ue])==null?void 0:se.pos;O.copy(Ye),W.copy(je),O.distanceTo(W)<V&&(n[L++]=O.x,n[L++]=O.y,n[L++]=O.z,n[L++]=W.x,n[L++]=W.y,n[L++]=W.z)}R.setColorAt(b,Qe)}return s.setDrawRange(0,L/3),new Promise(b=>{b()})}const ee=i.composer=new Ot(c),He=new Wt(o,a),ke={shape:1,radius:p()<600?1:p()<865?2:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1},Oe=new Vt(ke);ee.addPass(He),ee.addPass(Oe);let le=new G(.5,.5),F=new A;function We(){const s=(le.x-.5)*2,f=(le.y-.5)*2;F.x+=(s*p()*.75-F.x)*.08,F.y+=(f*x()*.9-F.y)*.08,a.position.x+=(F.x-a.position.x)*.06,a.position.y+=(F.y-a.position.y)*.06,a.lookAt(0,0,0)}function ce(s){const f=s.clientX/window.innerWidth,n=s.clientY/window.innerHeight;le.set(f,n),i.gridMat.uniforms.uMouse.value.set(f,1-n)}window.addEventListener("pointermove",ce,{passive:!0}),window.addEventListener("touchmove",s=>{if(s.touches&&s.touches.length){const f=s.touches[0];ce(f)}},{passive:!0});const xe=new Ee,O=new A,W=new A;function Ve(s){i.gridMat.uniforms.uTime.value=s;let f=w.material.envMap;return _&&f!==_.texture&&(w.material.envMap=_.texture,w.material.needsUpdate=!0),i.geometry.emailMe.position.x=i.positions.emailMe.x+(Math.sin(Math.sin(s*.15)*Math.PI*2)+.5)*p()*.5,i.geometry.emailMe.position.y=i.positions.emailMe.y+(Math.abs(Math.sin(Math.sin(s*.12)*Math.PI))+1)*x()*.24,ze(s).then(()=>{R.instanceMatrix.needsUpdate=!0,R.instanceColor.needsUpdate=!0}),Ge(k,H.geometry).then(()=>{k.attributes.position.needsUpdate=!0,H.geometry.setDrawRange(0,C),H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alphas.needsUpdate=!0}),new Promise(n=>{n()})}function we(){const s=performance.now()*.001,f=xe.getElapsedTime()%120,n=xe.getDelta();Ve(s).then(()=>{c.render(o,a);const h=Math.floor(f%13);h>=0&&h<=4&&ee.render(n)}),We(),requestAnimationFrame(we)}we();function _e(){i.gridMat.uniforms.uResolution.value.set(...i.functions.computeTextureCanvasSize()),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),ee.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",_e),()=>{window.removeEventListener("resize",_e),window.removeEventListener("pointermove",ce),c.dispose(),i.gridGeo.dispose(),i.gridMat.dispose(),J.dispose(),k.dispose()}}return Tt(()=>{try{const d=document.getElementById("picosoft-anim"),r=Ue(d);Se("use-company-wm","true"),Lt(async()=>r&&(await r)())}catch(d){Se("use-company-wm","false"),e.value=d,console.error("!PicosoftAnim",d)}}),(d,r)=>Bt(e)?Ut("",!0):(zt(),At("div",Qt))}};export{Zt as default};
