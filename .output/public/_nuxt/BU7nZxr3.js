var Xe=Object.defineProperty;var qe=(v,e,s)=>e in v?Xe(v,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):v[e]=s;var pe=(v,e,s)=>qe(v,typeof e!="symbol"?e+"":e,s);import{a as X,O as Ke,k as ve,m as re,q,U as De,h as O,r as Je,H as Ze,N as $e,s as Re,C as Ee,l as et,t as tt,u as ye,v as st,D as it,E as at,b as ot,w as nt,x as rt,c as lt,M as ct,y as dt,z as ft,j as oe,V as P,J as be,K as ht,L as ut,X as pt,Y as gt,Z as mt,o as vt,_ as xt,$ as wt,a0 as _t,S as yt,P as bt,W as Mt,p as ge,a1 as St,a2 as Ct,a3 as Dt,a4 as Rt,a5 as Me}from"./Dj-vhf08.js";import{O as Et}from"./CsvSSBkb.js";import{r as Pt,f as Tt,l as Lt,c as At,b as Ut,e as Bt,o as zt,g as ne}from"./Cq6MEMEh.js";import{u as Se}from"./P9B2vUO6.js";const It={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class K{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nt=new Ke(-1,1,1,-1,0,1);class Ft extends ve{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const Gt=new Ft;class Pe{constructor(e){this._mesh=new X(Gt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ht extends K{constructor(e,s="tDiffuse"){super(),this.textureID=s,this.uniforms=null,this.material=null,e instanceof q?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=De.clone(e.uniforms),this.material=new q({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pe(this.material)}render(e,s,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ce extends K{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,i){const u=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let m,B;this.inverse?(m=0,B=1):(m=1,B=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),l.buffers.stencil.setFunc(u.ALWAYS,m,4294967295),l.buffers.stencil.setClear(B),l.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(u.EQUAL,1,4294967295),l.buffers.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),l.buffers.stencil.setLocked(!0)}}class kt extends K{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wt{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const i=e.getSize(new O);this._width=i.width,this._height=i.height,s=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ze}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ht(It),this.copyPass.material.blending=$e,this.clock=new Re}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let i=!1;for(let u=0,l=this.passes.length;u<l;u++){const m=this.passes[u];if(m.enabled!==!1){if(m.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(u),m.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),m.needsSwap){if(i){const B=this.renderer.getContext(),H=this.renderer.state.buffers.stencil;H.setFunc(B.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),H.setFunc(B.EQUAL,1,4294967295)}this.swapBuffers()}Ce!==void 0&&(m instanceof Ce?i=!0:m instanceof kt&&(i=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new O);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const i=this._width*this._pixelRatio,u=this._height*this._pixelRatio;this.renderTarget1.setSize(i,u),this.renderTarget2.setSize(i,u);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(i,u)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ot extends K{constructor(e,s,i=null,u=null,l=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=i,this.clearColor=u,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,s,i){const u=e.autoClear;e.autoClear=!1;let l,m;this.overrideMaterial!==null&&(m=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=m),e.autoClear=u}}const me={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};class Vt extends K{constructor(e){super(),this.uniforms=De.clone(me.uniforms),this.material=new q({uniforms:this.uniforms,fragmentShader:me.fragmentShader,vertexShader:me.vertexShader});for(const s in e)e.hasOwnProperty(s)&&this.uniforms.hasOwnProperty(s)&&(this.uniforms[s].value=e[s]);this._fsQuad=new Pe(this.material)}render(e,s,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,s){this.uniforms.width.value=e,this.uniforms.height.value=s}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Qt={key:0,id:"picosoft-anim",class:"fixed top-0 z-0"},Zt={__name:"PicosoftAnim",setup(v){const e=Pt(null),s={grid:{segmentsX:123,segmentsY:40},texture:{path:"/images/Picosoft-brand.png",res:new O(2906,896)},nodes:{count:423,connectionFactor:.1723,maxConnection:69,speedFast:9,speedSlow:2,getBoundingMinDist:()=>s.nodes.getBoundingMaxDist()/2,getBoundingMaxDist:()=>Math.max(50,Math.floor(window.innerWidth*.05)),section:{getWidth:()=>s.nodes.getBoundingMaxDist()*2,getHeight:()=>s.nodes.getBoundingMaxDist()*2,getDivisionsX:()=>Math.floor((Math.max(300,window.innerWidth)+2*s.nodes.section.getWidth())/s.nodes.section.getWidth()),getDivisionsY:()=>Math.floor((Math.max(600,window.innerHeight)+2*s.nodes.section.getHeight())/s.nodes.section.getHeight())}},colors:{node:9211020,line:14540253,bg:16119260}},i={};function u(c,r){const a=c.width/c.height,o=r.width/r.height;let d={x:1,y:1},b={x:0,y:0};return a>o?(d.x=o/a,b.x=(1-d.x)*.5):(d.y=a/o,b.y=(1-d.y)*.5),{scale:d,offset:b,canvasSize:c,imageSize:r}}function l(c,r,a,o,d){return c>32?o+(d-o)*((c-r)/(a-r)):c}function m(c,r,a,o,d){return o+(d-o)*((c-r)/(a-r))}function B(c,r){c.normalize(),c.multiplyScalar(r)}function H(c,r){c.length()>r&&(c.normalize(),c.multiplyScalar(r))}class Te{constructor(r,a,o,d,b,A,U,w){pe(this,"boundingX");pe(this,"boundingY");this.pos=new P(r,a,o),this.dir=new P(d,b,A),this.speed=this.dir.length(),this.vel=this.dir.clone(),this.acceleration=new P,this.scale=oe.randFloat(.5,1.025)+2,this.moveFn=U,this.updateFn=w}move(){this.moveFn&&this.moveFn(this)}update(r){this.updateFn&&r&&this.updateFn(this,r)}}async function Le(){const r=await(await fetch("/images/glow_image.pcm")).arrayBuffer(),a=new DataView(r),o={idSize:{offset:0},imageType:{offset:1},palleteSize:{offset:2},palleteEntryDepth:{offset:4},x:{offset:6},width:{offset:8},y:{offset:10},height:{offset:12},mapType:{offset:14},colorDepth:{offset:16},descriptor:{offset:17},alpha:{offset:18},r:{offset:20},g:{offset:24},b:{offset:28}};a.getUint8(o.idSize.offset,!0),a.getUint8(o.imageType.offset,!0),a.getUint16(o.palleteSize.offset,!0),a.getUint16(o.palleteEntryDepth.offset,!0),a.getUint16(o.x.offset,!0);const d=a.getUint16(o.width.offset,!0);a.getUint16(o.y.offset,!0);const b=a.getUint16(o.height.offset,!0);a.getUint16(o.mapType.offset,!0);const A=a.getUint8(o.colorDepth.offset,!0);a.getUint8(o.descriptor.offset,!0),a.getUint16(o.alpha.offset,!0),a.getUint32(o.r.offset,!0),a.getUint32(o.g.offset,!0),a.getUint32(o.b.offset,!0);const U=1*d*b*A/8,w=o.b.offset+4,D=new Uint8Array(U/4);for(let g=0;g<D.length;g+=4)D[g+0]=l(a.getUint8(w+g),0,5e3,-255,2200),D[g+1]=l(a.getUint8(w+g+1),0,5e3,-255,2200),D[g+2]=l(a.getUint8(w+g+2),0,5e3,-255,2200),D[g+3]=a.getUint8(w+g+3);const _=new Ct(D,d,b,Dt);return _.type=Rt,_.minFilter=Me,_.magFilter=Me,_.needsUpdate=!0,_}async function Ae(){const c=i.view.scene;i.textures={};const{scale:r,canvasSize:a}=u({width:p(),height:x()},{width:3466,height:1876});i.textures.eggCo=await i.loaders.textureLoader.loadAsync(ne("/assets/img/mczvc-ws.png"));const o=new ge(a.width*r.x,a.height*r.y),d=new ye({map:i.textures.eggCo,transparent:!0,roughness:.9,metalness:1.8}),b=new X(o,d);b.position.set(-p()*1.25+a.width*r.x,Math.max(Math.max(x()*.8,723)-a.height*r.y,a.height*r.y-380),200),c.add(b);const{scale:A,canvasSize:U}=u({width:p()*1.7,height:x()},{width:9772,height:4167});i.textures.emailMe=await i.loaders.textureLoader.loadAsync(ne("/assets/img/email-me-at.png"));const w=new ge(U.width*A.x,U.height*A.y),D=new St({color:6710886,map:i.textures.emailMe}),_=new X(w,D);_.position.set(0,Math.max(x()*.8,683)-U.height*A.y,-10),c.add(_),i.geometry={...i.geometry||{},emailMe:_},i.positions={emailMe:new P().copy(_.position)};const g=i.loaders.textureLoader.load(s.texture.path);i.textures.logoTexture=g;const I=s.texture.res,[R,J]=L(),Z=s.grid.segmentsX,le=s.grid.segmentsY,T=i.gridGeo=new ge(R,J,Z,le);i.gridGeo=T;const E=i.gridMat=new q({vertexShader:`
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
}`,uniforms:{uTime:{value:0},uMouse:{value:new O(-1,-1)},uTexture:{value:g},uTexResolution:{value:I},uResolution:{value:new O(...L())},uGlowIntensity:{value:1.65}},side:be,transparent:!0,depthWrite:!1});i.gridMat=E;function L(){const{scale:$,canvasSize:ee}=u({width:p()*2,height:x()},{width:I.x,height:I.y});return[ee.width*$.x,ee.height*$.y]}i.functions={computeTextureCanvasSize:L};const z=new X(T,E);z.rotation.x=-.45,z.position.z=0,z.position.y=-x()+x()*.45,c.add(z)}const p=()=>window.innerWidth,x=()=>window.innerHeight;function Ue(){const c=new yt,r=new bt(45,window.innerWidth/window.innerHeight,1,2e3),a=new Mt({antialias:!0,dithering:!1,depth:!0,depthBuffer:!0,depthSize:16}),o=new Et(r,a.domElement);a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(s.colors.bg,1),a.state.buffers.stencil.setTest(!1);const d=a.getContext();return d.disable(d.CULL_FACE),d.clearDepth(1),d.blendFunc(d.SRC_ALPHA,d.ONE_MINUS_SRC_ALPHA),d.enable(d.BLEND),r.position.z=1720,{scene:c,camera:r,renderer:a,controls:o}}async function Be(c){const r=new et;i.loaders={textureLoader:r};const{scene:a,camera:o,renderer:d,controls:b}=i.view=Ue();await Ae(),c.appendChild(d.domElement),b.enabled=!1,b.update();let A=new tt(18,8,150,20),U=new ye({metalness:1,roughness:0,envMapIntensity:1});const w=new X(A,U);w.position.set(-p()*.85,x()*.8,100),w.scale.multiplyScalar(4),a.add(w);const D=new st(d);D.compileEquirectangularShader(),it.onLoad=function(){D.dispose()};let _;i.textures.reflectionMapping=i.loaders.textureLoader.load(ne("/assets/img/equirectangular.png"),function(t){t.mapping=at,t.colorSpace=ot,_=D.fromEquirectangular(t)}),a.background=i.loaders.textureLoader.load(ne("/assets/img/about-me.jpg"));const g=new nt(16777215,p()<600?220:p()<865?p()*.35:p()*.3125);g.position.set(p(),-x()/2,70),g.castShadow=!0,g.shadow.camera.zoom=4,a.add(g);const I=new rt(16777215,1);I.power=2e3,I.position.set(0,0,1e3),o.lookAt(0,x(),0),o.add(I);const R=Math.min(s.nodes.count,Math.floor(p()*.6)),J=()=>Math.min(window.innerWidth*s.nodes.connectionFactor*.9,s.nodes.maxConnection),Z=new lt(2.6+(p()-1)*.0018,8,8),le=new ct({wireframe:!0,fog:!1,color:s.colors.node}),T=new dt(Z,le,R);a.add(T);const E=new ft,L=Array.from({length:R},()=>new Te(Math.random()*window.innerWidth,(Math.random()-.5)*window.innerHeight*2,Math.abs(Math.random()-.6)*J(),oe.randFloat(-.1,.25*Math.max(3,p()*.001)),oe.randFloat(-.1,.25*Math.max(3,x()*.001)),oe.randFloat(-.95,.4),t=>{t.dir.add(t.vel),t.dir.setLength(t.speed),t.pos.x=t.pos.x+t.dir.x,t.pos.y=t.pos.y+s.nodes.speedFast*.23*t.dir.y,t.pos.z=t.pos.z+t.dir.z,Math.abs(t.pos.x)>window.innerWidth*.8&&(t.pos.x=-p()*.25),Math.abs(t.pos.y)>x()&&(t.pos.y=-x(),t.dir.y=Math.abs(t.dir.y)*1.7),t.pos.z>150?t.dir.z=-23:t.pos.z<-60&&(t.dir.z=30)},(t,f)=>{let n=0;const h=new P,M=new P(0,0,0),C=new P;for(let y of f){const F=t.pos.distanceTo(y.pos),se=F<s.nodes.getBoundingMinDist(),S=F<s.nodes.getBoundingMaxDist();if(y!==t&&S)if(h.add(y.pos),h.sub(t.pos),C.add(y.dir),se){n++;const G=m(F,0,Math.max(35,window.innerWidth*.1),-.01,-.001);h.multiplyScalar(G);const ie=m(F,p()*.013888889,Math.min(25,window.innerWidth*.017361111),-.01,.001);M.add(y.pos),M.add(t.pos),M.multiplyScalar(ie)}else h.multiplyScalar(5e-4),C.multiplyScalar(.005)}n>0&&(h.divideScalar(n),h.sub(t.vel),M.divideScalar(n),M.sub(t.dir),H(M,t.speed*2),C.divideScalar(n),B(C,t.speed),C.sub(t.dir),H(C,t.speed)),t.acceleration.add(h),i.time>=60&&t.acceleration.add(M),i.time>=120&&t.acceleration.add(C),t.vel.add(t.acceleration),H(t.vel,t.speed),t.acceleration.multiplyScalar(0)})),z=new ve,$=new Float32Array(R*3),ee=new Float32Array(R);z.setAttribute("position",new re($,3)),z.setAttribute("alphas",new re(ee,1));const N=new q({uniforms:{colorMap:{value:await Le()},sensitivity:{value:99/255},tint:{value:new P(14,244,251)}},vertexShader:`
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
    uniform sampler2D colorMap;

    void main() {
      vec4 texColor = texture2D(colorMap, gl_PointCoord);

      gl_FragColor = vec4(tint.rgb, v_alpha * sensitivity) * vec4(texColor.rgb, texColor.a);
    } `,transparent:!0,depthWrite:!1,depthTest:!1,side:be});N.blending=ht,N.blendSrc=ut,N.blendDst=pt,N.blendEquation=gt,N.transparent=!0,N.depthFunc=mt;const V=new vt(z,N);a.add(V),L.forEach((t,f)=>{E.position.copy(t.pos),E.scale.setScalar(t.scale),E.updateMatrix(),T.setMatrixAt(f,E.matrix)}),T.instanceMatrix.needsUpdate=!0;function ze(t){if(L.forEach(n=>{if(n.move(),t<=120||t>=180){n.boundingX=Math.round(n.pos.x/s.nodes.section.getWidth())+1,n.boundingY=Math.round(n.pos.y/s.nodes.section.getHeight())+1;const h=k.get(n.boundingX)||new Map([[n.boundingY,{nodes:[]}]]),M=h.get(n.boundingY)||{nodes:[]};M&&M.nodes.push(n),h.set(n.boundingY,M),k.set(n.boundingX,h)}}),t>120&&t<180)return new Promise(n=>{n()});const f=Math.floor(t%8);(f===0||f===1||f===3||f===4||f===6||f===7)&&k.entries().map(([n,h])=>{h.entries().map(([M,C])=>{C.nodes&&C.nodes.forEach(y=>{y.update(C.nodes)})}).forEach(()=>{})}).forEach(()=>{});for(const[,n]of k.entries())for(const[,h]of n.entries())h.nodes=[];return new Promise(n=>{n()})}const k=new Map;for(let t=0;t<s.nodes.section.getDivisionsX();t++){k.set(t,new Map);for(let f=0;f<s.nodes.section.getDivisionsY();f++){const n=s.nodes.section.getWidth(),h=s.nodes.section.getHeight();k.get(t).set(f,{x:t*n-n,y:f*h-h,w:n,h,nodes:[]})}}const Ie=new xt({color:s.colors.line,transparent:!0,opacity:.6}),Q=new ve,Ne=new Float32Array(R*R*3);Q.setAttribute("position",new wt(Ne,3));const Fe=new _t(Q,Ie);a.add(Fe);function Ge(t,f){var F,se;const n=t.attributes.position.array,h=f.attributes.position.array,M=f.attributes.alphas.array,C=J();let y=0;for(let S=0;S<R;S++){const G=(F=L[S])==null?void 0:F.pos,ie=G.z,ae=L[S].scale,fe=255/(Math.sin(.1-ae*(1-ie*.01))*155),Qe=new Ee(1-fe,fe,fe);E.scale.set(ae,ae,ae),E.position.copy(G),E.updateMatrix(),T.setMatrixAt(S,E.matrix);const he=S*3;h[he+0]=G.x,h[he+1]=G.y,h[he+2]=G.z,M[S]=(ie+90)/255;const Ye=L[S].pos;for(let ue=S+1;ue<R;ue++){const je=(se=L[ue])==null?void 0:se.pos;Y.copy(Ye),j.copy(je),Y.distanceTo(j)<C&&(n[y++]=Y.x,n[y++]=Y.y,n[y++]=Y.z,n[y++]=j.x,n[y++]=j.y,n[y++]=j.z)}T.setColorAt(S,Qe)}return t.setDrawRange(0,y/3),new Promise(S=>{S()})}const te=i.composer=new Wt(d),He=new Ot(a,o),ke={shape:1,radius:p()<600?1:p()<865?2:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1},We=new Vt(ke);te.addPass(He),te.addPass(We);let ce=new O(.5,.5),W=new P;function Oe(){const t=(ce.x-.5)*2,f=(ce.y-.5)*2;W.x+=(t*p()*.75-W.x)*.08,W.y+=(f*x()*.9-W.y)*.08,o.position.x+=(W.x-o.position.x)*.06,o.position.y+=(W.y-o.position.y)*.06,o.lookAt(0,0,0)}function de(t){const f=t.clientX/window.innerWidth,n=t.clientY/window.innerHeight;ce.set(f,n),i.gridMat.uniforms.uMouse.value.set(f,1-n)}window.addEventListener("pointermove",de,{passive:!0}),window.addEventListener("touchmove",t=>{if(t.touches&&t.touches.length){const f=t.touches[0];de(f)}},{passive:!0});const xe=new Re,Y=new P,j=new P;function Ve(t){i.gridMat.uniforms.uTime.value=t;let f=w.material.envMap;return _&&f!==_.texture&&(w.material.envMap=_.texture,w.material.needsUpdate=!0),i.geometry.emailMe.position.x=i.positions.emailMe.x+(Math.sin(Math.sin(t*.15)*Math.PI*2)+.5)*p()*.5,i.geometry.emailMe.position.y=i.positions.emailMe.y+(Math.abs(Math.sin(Math.sin(t*.12)*Math.PI))+1)*x()*.24,ze(t).then(()=>{T.instanceMatrix.needsUpdate=!0,T.instanceColor.needsUpdate=!0}),Ge(Q,V.geometry).then(()=>{Q.attributes.position.needsUpdate=!0,V.geometry.setDrawRange(0,R),V.geometry.attributes.position.needsUpdate=!0,V.geometry.attributes.alphas.needsUpdate=!0}),new Promise(n=>{n()})}function we(){const t=performance.now()*.001,f=xe.getElapsedTime()%120;i.time=f;const n=xe.getDelta();Oe(),Ve(t).then(()=>{d.render(a,o);const h=Math.floor(f%13);h>=0&&h<=4&&te.render(n)}),requestAnimationFrame(we)}we();function _e(){i.gridMat.uniforms.uResolution.value.set(...i.functions.computeTextureCanvasSize()),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight),te.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",_e),()=>{window.removeEventListener("resize",_e),window.removeEventListener("pointermove",de),d.dispose(),i.gridGeo.dispose(),i.gridMat.dispose(),Z.dispose(),Q.dispose()}}return Tt(()=>{try{const c=document.getElementById("picosoft-anim"),r=Be(c);Se("use-company-wm","true"),Lt(async()=>r&&(await r)())}catch(c){Se("use-company-wm","false"),e.value=c,console.error("!PicosoftAnim",c)}}),(c,r)=>Bt(e)?Ut("",!0):(zt(),At("div",Qt))}};export{Zt as default};
