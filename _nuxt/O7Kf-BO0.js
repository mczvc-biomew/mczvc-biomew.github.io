var Qe=Object.defineProperty;var Ye=(m,e,t)=>e in m?Qe(m,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[e]=t;var xe=(m,e,t)=>Ye(m,typeof e!="symbol"?e+"":e,t);import{a as X,O as je,k as _e,m as de,q as K,U as Pe,h as O,r as qe,H as Xe,N as Ke,s as Te,C as Le,l as Je,t as Ze,u as Se,D as $e,v as et,E as tt,b as st,w as it,c as ot,M as at,x as nt,y as rt,j as le,V as z,z as Ce,J as lt,K as ct,L as dt,X as ft,Y as ht,o as ut,Z as pt,_ as gt,$ as mt,S as xt,P as vt,W as wt,p as ve,a0 as _t,a1 as yt,a2 as bt,a3 as Mt,a4 as St,a5 as De}from"./Dk7D6Rs2.js";import{O as Ct}from"./BWgY9860.js";import{r as Dt,f as Et,l as Rt,c as Pt,b as Tt,e as Lt,o as At,g as ce}from"./7VwHqc1T.js";import{u as Ee}from"./Bn8ywbaf.js";const Ut={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class J{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bt=new je(-1,1,1,-1,0,1);class zt extends _e{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const It=new zt;class Ae{constructor(e){this._mesh=new X(It,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nt extends J{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof K?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pe.clone(e.uniforms),this.material=new K({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ae(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Re extends J{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const f=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let x,A;this.inverse?(x=0,A=1):(x=1,A=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(f.REPLACE,f.REPLACE,f.REPLACE),r.buffers.stencil.setFunc(f.ALWAYS,x,4294967295),r.buffers.stencil.setClear(A),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(f.EQUAL,1,4294967295),r.buffers.stencil.setOp(f.KEEP,f.KEEP,f.KEEP),r.buffers.stencil.setLocked(!0)}}class Ft extends J{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Gt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new O);this._width=i.width,this._height=i.height,t=new qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xe}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nt(Ut),this.copyPass.material.blending=Ke,this.clock=new Te}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let f=0,r=this.passes.length;f<r;f++){const x=this.passes[f];if(x.enabled!==!1){if(x.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(f),x.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),x.needsSwap){if(i){const A=this.renderer.getContext(),Z=this.renderer.state.buffers.stencil;Z.setFunc(A.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),Z.setFunc(A.EQUAL,1,4294967295)}this.swapBuffers()}Re!==void 0&&(x instanceof Re?i=!0:x instanceof Ft&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new O);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,f=this._height*this._pixelRatio;this.renderTarget1.setSize(i,f),this.renderTarget2.setSize(i,f);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,f)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ht extends J{constructor(e,t,i=null,f=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=f,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,i){const f=e.autoClear;e.autoClear=!1;let r,x;this.overrideMaterial!==null&&(x=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=x),e.autoClear=f}}const we={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};class kt extends J{constructor(e){super(),this.uniforms=Pe.clone(we.uniforms),this.material=new K({uniforms:this.uniforms,fragmentShader:we.fragmentShader,vertexShader:we.vertexShader});for(const t in e)e.hasOwnProperty(t)&&this.uniforms.hasOwnProperty(t)&&(this.uniforms[t].value=e[t]);this._fsQuad=new Ae(this.material)}render(e,t,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ot={key:0,id:"picosoft-anim",class:"fixed top-0 z-0"},Xt={__name:"PicosoftAnim",setup(m){const e=Dt(null),t={grid:{segmentsX:123,segmentsY:40},texture:{path:"/images/Picosoft-brand.png",res:new O(2906,896)},nodes:{count:423,connectionFactor:.1723,maxConnection:69,speedFast:9,speedSlow:2,getBoundingMinDist:()=>t.nodes.getBoundingMaxDist()/2,getBoundingMaxDist:()=>Math.max(50,Math.floor(window.innerWidth*.05)),section:{getWidth:()=>t.nodes.getBoundingMaxDist()*2,getHeight:()=>t.nodes.getBoundingMaxDist()*2,getDivisionsX:()=>Math.floor((Math.max(300,window.innerWidth)+2*t.nodes.section.getWidth())/t.nodes.section.getWidth()),getDivisionsY:()=>Math.floor((Math.max(600,window.innerHeight)+2*t.nodes.section.getHeight())/t.nodes.section.getHeight())}},colors:{node:9211020,line:14540253,bg:16119260}},i={};function f(c,n){const o=c.width/c.height,a=n.width/n.height;let l={x:1,y:1},y={x:0,y:0};return o>a?(l.x=a/o,y.x=(1-l.x)*.5):(l.y=o/a,y.y=(1-l.y)*.5),{scale:l,offset:y,canvasSize:c,imageSize:n}}function r(c,n,o,a,l){return c>32?a+(l-a)*((c-n)/(o-n)):c}function x(c,n,o,a,l){return a+(l-a)*((c-n)/(o-n))}function A(c,n){c.length()>n&&(c.normalize(),c.multiplyScalar(n))}class Z{constructor(n,o,a,l,y,T,L,E){xe(this,"boundingX");xe(this,"boundingY");this.pos=new z(n,o,a),this.dir=new z(l,y,T),this.speed=this.dir.length(),this.vel=this.dir.clone(),this.acceleration=new z,this.scale=le.randFloat(.5,2.8)+1,this.moveFn=L,this.updateFn=E}move(){this.moveFn&&this.moveFn(this)}update(n){this.updateFn&&n&&this.updateFn(this,n)}}async function Ue(){const n=await(await fetch("/images/glow_image.pcm")).arrayBuffer(),o=new DataView(n),a={idSize:{offset:0},imageType:{offset:1},palleteSize:{offset:2},palleteEntryDepth:{offset:4},x:{offset:6},width:{offset:8},y:{offset:10},height:{offset:12},mapType:{offset:14},colorDepth:{offset:16},descriptor:{offset:17},alpha:{offset:18},r:{offset:20},g:{offset:24},b:{offset:28}};o.getUint8(a.idSize.offset,!0),o.getUint8(a.imageType.offset,!0),o.getUint16(a.palleteSize.offset,!0),o.getUint16(a.palleteEntryDepth.offset,!0),o.getUint16(a.x.offset,!0);const l=o.getUint16(a.width.offset,!0);o.getUint16(a.y.offset,!0);const y=o.getUint16(a.height.offset,!0);o.getUint16(a.mapType.offset,!0);const T=o.getUint8(a.colorDepth.offset,!0);o.getUint8(a.descriptor.offset,!0),o.getUint16(a.alpha.offset,!0),o.getUint32(a.r.offset,!0),o.getUint32(a.g.offset,!0),o.getUint32(a.b.offset,!0);const L=1*l*y*T/8,E=a.b.offset+4,w=new Uint8Array(L/4);for(let u=0;u<w.length;u+=4)w[u+0]=r(o.getUint8(E+u),0,5e3,-255,2200),w[u+1]=r(o.getUint8(E+u+1),0,5e3,-255,2200),w[u+2]=r(o.getUint8(E+u+2),0,5e3,-255,2200),w[u+3]=o.getUint8(E+u+3);const _=new bt(w,l,y,Mt);return _.type=St,_.minFilter=De,_.magFilter=De,_.needsUpdate=!0,_}async function Be(){const c=i.view.scene;i.textures={};const{scale:n,canvasSize:o}=f({width:C(),height:v()},{width:3466,height:1876});i.textures.eggCo=await i.loaders.textureLoader.loadAsync(ce("/assets/img/mczvc-ws.png"));const a=new ve(o.width*n.x,o.height*n.y),l=new Se({map:i.textures.eggCo,transparent:!0,shininess:0,roughness:.9,metalness:1.8}),y=new X(a,l);y.position.set(-C()*1.25+o.width*n.x,Math.max(Math.max(v()*.8,723)-o.height*n.y,o.height*n.y-380),200),c.add(y);const{scale:T,canvasSize:L}=f({width:C()*1.7,height:v()},{width:9772,height:4167});i.textures.emailMe=await i.loaders.textureLoader.loadAsync(ce("/assets/img/email-me-at.png"));const E=new ve(L.width*T.x,L.height*T.y),w=new _t({color:6710886,map:i.textures.emailMe}),_=new X(E,w);_.position.set(0,Math.max(v()*.8,683)-L.height*T.y,-10),c.add(_),i.geometry={...i.geometry||{},emailMe:_},i.positions={emailMe:new z().copy(_.position)};const u=new yt(16777215,450);u.position.set(C(),-v()/2,70),u.castShadow=!0,u.shadow.camera.zoom=4,c.add(u);const F=i.loaders.textureLoader.load(t.texture.path);i.textures.logoTexture=F;const b=t.texture.res,[$,fe]=M(),ee=t.grid.segmentsX,he=t.grid.segmentsY,R=i.gridGeo=new ve($,fe,ee,he);i.gridGeo=R;const D=i.gridMat=new K({vertexShader:`
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
}`,uniforms:{uTime:{value:0},uMouse:{value:new O(-1,-1)},uTexture:{value:F},uTexResolution:{value:b},uResolution:{value:new O(...M())},uGlowIntensity:{value:1.65}},side:Ce,transparent:!0,depthWrite:!1});i.gridMat=D;function M(){const{scale:te,canvasSize:se}=f({width:C()*2,height:v()},{width:b.x,height:b.y});return[se.width*te.x,se.height*te.y]}i.functions={computeTextureCanvasSize:M};const U=new X(R,D);U.rotation.x=-.45,U.position.z=0,U.position.y=-v()+v()*.45,c.add(U)}const C=()=>window.innerWidth,v=()=>window.innerHeight;function ze(){const c=new xt,n=new vt(45,window.innerWidth/window.innerHeight,1,2e3),o=new wt({antialias:!0,dithering:!1,depth:!0,depthBuffer:!0,depthSize:16}),a=new Ct(n,o.domElement);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(t.colors.bg,1),o.state.buffers.stencil.setTest(!1);const l=o.getContext();return l.disable(l.CULL_FACE),l.clearDepth(1),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA),l.enable(l.BLEND),n.position.z=1720,{scene:c,camera:n,renderer:o,controls:a}}async function Ie(c){const n=new Je;i.loaders={textureLoader:n};const{scene:o,camera:a,renderer:l,controls:y}=i.view=ze();await Be(),c.appendChild(l.domElement),y.enabled=!1,y.update();function T(){const s=(ue.x-.5)*2,p=(ue.y-.5)*2;k.x+=(s*C()*.75-k.x)*.08,k.y+=(p*v()*.9-k.y)*.08,a.position.x+=(k.x-a.position.x)*.06,a.position.y+=(k.y-a.position.y)*.06,a.lookAt(0,0,0)}let L=new Ze(18,8,150,20),E=new Se({metalness:1,roughness:0,envMapIntensity:1});const w=new X(L,E);w.position.set(-C()*.85,v()*.8,100),w.scale.multiplyScalar(4),o.add(w),$e.onLoad=function(){u.dispose()};let _;i.textures.reflectionMapping=i.loaders.textureLoader.load(ce("/assets/img/equirectangular.png"),function(s){s.mapping=tt,s.colorSpace=st,_=u.fromEquirectangular(s)});const u=new et(l);u.compileEquirectangularShader(),o.background=i.loaders.textureLoader.load(ce("/assets/img/about-me.jpg"));const F=new it(16777215,1);F.power=2e3,F.position.set(0,0,1e3),a.lookAt(0,v(),0),a.add(F);const b=Math.min(t.nodes.count,Math.floor(C()*.6)),$=()=>Math.min(window.innerWidth*t.nodes.connectionFactor*.9,t.nodes.maxConnection),fe=t.nodes.speedSlow,ee=new ot(2.6,8,8),he=new at({color:t.colors.node}),R=new nt(ee,he,b);o.add(R);const D=new rt,M=Array.from({length:b},()=>new Z(Math.random()*window.innerWidth,(Math.random()-.5)*window.innerHeight*2,Math.abs(Math.random()-.6)*$(),le.randFloat(-.1,.25*Math.max(3,C()*.001)),le.randFloat(-.1,.25*Math.max(3,v()*.001)),le.randFloat(-.95,.4),s=>{s.dir.add(s.vel),s.dir.setLength(s.speed),s.pos.x=s.pos.x+s.dir.x,s.pos.y=s.pos.y+t.nodes.speedFast*.23*s.dir.y,s.pos.z=s.pos.z+s.dir.z,Math.abs(s.pos.x)>window.innerWidth*.8&&(s.pos.x=-C()*.25),Math.abs(s.pos.y)>v()&&(s.pos.y=-v(),s.dir.y=Math.abs(s.dir.y)*1.7),s.pos.z>150?s.dir.z=-23:s.pos.z<-60&&(s.dir.z=30)},(s,p)=>{let g=0;const h=new z;for(let N of p){const B=s.pos.distanceTo(N.pos),oe=B<t.nodes.getBoundingMinDist(),ae=B<t.nodes.getBoundingMaxDist();if(N!==s&&ae)if(h.add(N.pos),h.sub(s.pos),oe){g++;const ne=x(B,0,Math.max(35,window.innerWidth*.1),-.01,-.001);h.multiplyScalar(ne)}else h.multiplyScalar(5e-4)}g>0&&h.sub(s.vel),s.acceleration.add(h),s.vel.add(s.acceleration),A(s.vel,s.speed),s.acceleration.multiplyScalar(0)})),U=new _e,te=new Float32Array(b*3),se=new Float32Array(b*4);U.setAttribute("position",new de(te,3)),U.setAttribute("color",new de(se,4));const I=new K({uniforms:{colorTexture:{value:await Ue()},sensitivity:{value:99/255}},vertexShader:`
    attribute vec4 color;
    varying vec4 v_color;

    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
      gl_PointSize = abs(position.z)/120.0 * 32.0;
      v_color = color;
    } `,fragmentShader:`
    precision mediump float;
    varying vec4 v_color;
    uniform float sensitivity;
    uniform sampler2D colorTexture;

    void main() {
      vec4 texColor = texture2D(colorTexture, gl_PointCoord);

      gl_FragColor = vec4(v_color.rgb, v_color.a * sensitivity) * vec4(texColor.rgb, texColor.a);
    } `,transparent:!0,depthWrite:!1,depthTest:!1,side:Ce});I.blending=lt,I.blendSrc=ct,I.blendDst=dt,I.blendEquation=ft,I.transparent=!0,I.depthFunc=ht;const G=new ut(U,I);o.add(G),M.forEach((s,p)=>{D.position.copy(s.pos),D.scale.setScalar(s.scale),D.updateMatrix(),R.setMatrixAt(p,D.matrix)}),R.instanceMatrix.needsUpdate=!0;const W=new Map;for(let s=0;s<t.nodes.section.getDivisionsX();s++){W.set(s,new Map);for(let p=0;p<t.nodes.section.getDivisionsY();p++){const g=t.nodes.section.getWidth(),h=t.nodes.section.getHeight();W.get(s).set(p,{x:s*g-g,y:p*h-h,w:g,h,nodes:[]})}}const Ne=new pt({color:t.colors.line,transparent:!0,opacity:.6}),H=new _e,Fe=new Float32Array(b*b*3);H.setAttribute("position",new gt(Fe,3));const Ge=new mt(H,Ne);o.add(Ge);const ie=i.composer=new Gt(l),He=new Ht(o,a),ke={shape:1,radius:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1},Oe=new kt(ke);ie.addPass(He),ie.addPass(Oe);let ue=new O(.5,.5),k=new z;function pe(s){const p=s.clientX/window.innerWidth,g=s.clientY/window.innerHeight;ue.set(p,g),i.gridMat.uniforms.uMouse.value.set(p,1-g)}window.addEventListener("pointermove",pe,{passive:!0}),window.addEventListener("touchmove",s=>{if(s.touches&&s.touches.length){const p=s.touches[0];pe(p)}},{passive:!0});const ye=new Te,V=new z,Q=new z;function We(s){var oe,ae,ne;i.gridMat.uniforms.uTime.value=s;let p=w.material.envMap;_&&p!==_.texture&&(w.material.envMap=_.texture,w.material.needsUpdate=!0),i.geometry.emailMe.position.x=i.positions.emailMe.x+(Math.sin(Math.sin(s*.15)*Math.PI*2)+.5)*C()*.5,i.geometry.emailMe.position.y=i.positions.emailMe.y+(Math.abs(Math.sin(Math.sin(s*.12)*Math.PI))+1)*v()*.24;let g=0;const h=H.attributes.position.array,N=G.geometry.attributes.position.array,B=G.geometry.attributes.color.array;M.forEach((d,P)=>{d.move(),d.boundingX=Math.round(d.pos.x/t.nodes.section.getWidth())+1,d.boundingY=Math.round(d.pos.y/t.nodes.section.getHeight())+1;const S=W.get(d.boundingX);S&&S.get(d.boundingY)&&S.get(d.boundingY).nodes.push(d)||d.boundingY}),M.forEach((d,P)=>{const S=Math.floor(s%23);S>=0&&S<=11&&W.entries().map(([Y,j])=>{j.entries().map(([q,re])=>{re.nodes&&d.update(re.nodes)}).forEach(()=>{})}).forEach(()=>{})});for(const[d,P]of W.entries())for(const[S,Y]of P.entries())Y.nodes=[];for(let d=0;d<b;d++){const P=(oe=M[d])==null?void 0:oe.pos;(ae=M[d])==null||ae.dir;const S=M[d].scale+Math.sin(P.z*.1*fe*.5+d)*2.1,Y=P.z;D.scale.set(S,S,S),D.position.copy(P),D.updateMatrix(),R.setMatrixAt(d,D.matrix);const j=d*3;N[j+0]=P.x,N[j+1]=P.y,N[j+2]=P.z;const q=d*4;B[q+0]=14,B[q+1]=244,B[q+2]=251,B[q+3]=(Y+90)/255;const re=M[d].pos;for(let me=d+1;me<b;me++){const Ve=(ne=M[me])==null?void 0:ne.pos;V.copy(re),Q.copy(Ve),V.distanceTo(Q)<$()&&(h[g++]=V.x,h[g++]=V.y,h[g++]=V.z,h[g++]=Q.x,h[g++]=Q.y,h[g++]=Q.z)}const ge=255/(Math.sin(.1-S*(1-Y*.01))*155);R.setColorAt(d,new Le(ge,ge,ge))}R.instanceColor.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,H.setDrawRange(0,g/3),H.attributes.position.needsUpdate=!0,G.geometry.setDrawRange(0,b),G.geometry.attributes.position.needsUpdate=!0,G.geometry.attributes.color.needsUpdate=!0}function be(){const s=performance.now()*.001,p=ye.getElapsedTime()%120,g=ye.getDelta();We(s),T(),l.render(o,a);const h=Math.floor(p%13);h>=0&&h<=4&&ie.render(g),requestAnimationFrame(be)}be();function Me(){i.gridMat.uniforms.uResolution.value.set(...i.functions.computeTextureCanvasSize()),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),ie.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",Me),()=>{window.removeEventListener("resize",Me),window.removeEventListener("pointermove",pe),l.dispose(),i.gridGeo.dispose(),i.gridMat.dispose(),ee.dispose(),H.dispose()}}return Et(()=>{try{const c=document.getElementById("picosoft-anim"),n=Ie(c);Ee("use-company-wm","true"),Rt(async()=>n&&(await n)())}catch(c){Ee("use-company-wm","false"),e.value=c,console.error("!PicosoftAnim",c)}}),(c,n)=>Lt(e)?Tt("",!0):(At(),Pt("div",Ot))}};export{Xt as default};
