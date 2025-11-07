var je=Object.defineProperty;var Xe=(x,e,t)=>e in x?je(x,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[e]=t;var ge=(x,e,t)=>Xe(x,typeof e!="symbol"?e+"":e,t);import{a as $,O as qe,k as xe,m as ce,q as ee,U as Re,h as j,r as Ke,H as Je,N as Ze,s as Ee,C as Pe,l as $e,t as et,u as Me,v as tt,D as st,E as it,b as ot,w as at,x as nt,c as rt,M as lt,y as ct,z as dt,j as re,V as P,J as Se,K as ft,L as ht,X as ut,Y as pt,Z as gt,o as mt,_ as vt,$ as xt,a0 as wt,S as _t,P as yt,W as bt,p as me,a1 as Mt,a2 as St,a3 as Ct,a4 as Dt,a5 as Ce}from"./Dj-vhf08.js";import{O as Rt}from"./CsvSSBkb.js";import{r as Et,f as Pt,l as Tt,c as Lt,b as At,e as Ut,o as Bt,g as le}from"./Bs2rlOpm.js";import{u as zt}from"./BO4hz2zX.js";const It={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class te{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nt=new qe(-1,1,1,-1,0,1);class Ft extends xe{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}}const Gt=new Ft;class Te{constructor(e){this._mesh=new $(Gt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ht extends te{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ee?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Re.clone(e.uniforms),this.material=new ee({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Te(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class De extends te{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const h=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let v,B;this.inverse?(v=0,B=1):(v=1,B=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(h.REPLACE,h.REPLACE,h.REPLACE),l.buffers.stencil.setFunc(h.ALWAYS,v,4294967295),l.buffers.stencil.setClear(B),l.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(h.EQUAL,1,4294967295),l.buffers.stencil.setOp(h.KEEP,h.KEEP,h.KEEP),l.buffers.stencil.setLocked(!0)}}class Wt extends te{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new j);this._width=s.width,this._height=s.height,t=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ht(It),this.copyPass.material.blending=Ze,this.clock=new Ee}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let h=0,l=this.passes.length;h<l;h++){const v=this.passes[h];if(v.enabled!==!1){if(v.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(h),v.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),v.needsSwap){if(s){const B=this.renderer.getContext(),H=this.renderer.state.buffers.stencil;H.setFunc(B.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),H.setFunc(B.EQUAL,1,4294967295)}this.swapBuffers()}De!==void 0&&(v instanceof De?s=!0:v instanceof Wt&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,h=this._height*this._pixelRatio;this.renderTarget1.setSize(s,h),this.renderTarget2.setSize(s,h);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(s,h)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ot extends te{constructor(e,t,s=null,h=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=h,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,s){const h=e.autoClear;e.autoClear=!1;let l,v;this.overrideMaterial!==null&&(v=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=v),e.autoClear=h}}const ve={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};class Vt extends te{constructor(e){super(),this.uniforms=Re.clone(ve.uniforms),this.material=new ee({uniforms:this.uniforms,fragmentShader:ve.fragmentShader,vertexShader:ve.vertexShader});for(const t in e)e.hasOwnProperty(t)&&this.uniforms.hasOwnProperty(t)&&(this.uniforms[t].value=e[t]);this._fsQuad=new Te(this.material)}render(e,t,s){this.material.uniforms.tDiffuse.value=s.texture,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Qt={key:0,id:"picosoft-anim",class:"fixed top-0 z-0"},Zt={__name:"PicosoftAnim",setup(x){const e=Et(null),t={grid:{segmentsX:123,segmentsY:40},texture:{path:"/images/Picosoft-brand.png",res:new j(2906,896)},nodes:{count:423,connectionFactor:.1723,maxConnection:69,speedFast:9,speedSlow:2,getBoundingMinDist:()=>t.nodes.getBoundingMaxDist()/2,getBoundingMaxDist:()=>Math.max(50,Math.floor(window.innerWidth*.05)),section:{getWidth:()=>t.nodes.getBoundingMaxDist()*2,getHeight:()=>t.nodes.getBoundingMaxDist()*2,getDivisionsX:()=>Math.floor((Math.max(300,window.innerWidth)+2*t.nodes.section.getWidth())/t.nodes.section.getWidth()),getDivisionsY:()=>Math.floor((Math.max(600,window.innerHeight)+2*t.nodes.section.getHeight())/t.nodes.section.getHeight())}},colors:{node:9211020,line:14540253,bg:16119260}},s={};function h(c,n){const o=c.width/c.height,a=n.width/n.height;let d={x:1,y:1},S={x:0,y:0};return o>a?(d.x=a/o,S.x=(1-d.x)*.5):(d.y=o/a,S.y=(1-d.y)*.5),{scale:d,offset:S,canvasSize:c,imageSize:n}}function l(c,n,o,a,d){return c>32?a+(d-a)*((c-n)/(o-n)):c}function v(c,n,o,a,d){return a+(d-a)*((c-n)/(o-n))}function B(c,n){c.normalize(),c.multiplyScalar(n)}function H(c,n){c.length()>n&&(c.normalize(),c.multiplyScalar(n))}class Le{constructor(n,o,a,d,S,A,U,_,C){ge(this,"boundingX");ge(this,"boundingY");this.pos=new P(n,o,a),this.dir=new P(d,S,A),this.speed=this.dir.length(),this.vel=this.dir.clone(),this.acceleration=new P,this.scale=re.randFloat(.5,1.025)+2,this.moveFn=_,this.updateFn=C,this.index=U}move(){this.moveFn&&this.moveFn(this)}update(n){this.updateFn&&n&&this.updateFn(this,n)}}async function Ae(){const n=await(await fetch("/images/glow_image.pcm")).arrayBuffer(),o=new DataView(n),a={idSize:{offset:0},imageType:{offset:1},palleteSize:{offset:2},palleteEntryDepth:{offset:4},x:{offset:6},width:{offset:8},y:{offset:10},height:{offset:12},mapType:{offset:14},colorDepth:{offset:16},descriptor:{offset:17},alpha:{offset:18},r:{offset:20},g:{offset:24},b:{offset:28}};o.getUint8(a.idSize.offset,!0),o.getUint8(a.imageType.offset,!0),o.getUint16(a.palleteSize.offset,!0),o.getUint16(a.palleteEntryDepth.offset,!0),o.getUint16(a.x.offset,!0);const d=o.getUint16(a.width.offset,!0);o.getUint16(a.y.offset,!0);const S=o.getUint16(a.height.offset,!0);o.getUint16(a.mapType.offset,!0);const A=o.getUint8(a.colorDepth.offset,!0);o.getUint8(a.descriptor.offset,!0),o.getUint16(a.alpha.offset,!0),o.getUint32(a.r.offset,!0),o.getUint32(a.g.offset,!0),o.getUint32(a.b.offset,!0);const U=1*d*S*A/8,_=a.b.offset+4,C=new Uint8Array(U/4);for(let g=0;g<C.length;g+=4)C[g+0]=l(o.getUint8(_+g),0,5e3,-255,2200),C[g+1]=l(o.getUint8(_+g+1),0,5e3,-255,2200),C[g+2]=l(o.getUint8(_+g+2),0,5e3,-255,2200),C[g+3]=o.getUint8(_+g+3);const y=new St(C,d,S,Ct);return y.type=Dt,y.minFilter=Ce,y.magFilter=Ce,y.needsUpdate=!0,y}async function Ue(){const c=s.view.scene;s.textures={};const{scale:n,canvasSize:o}=h({width:p(),height:w()},{width:3466,height:1876});s.textures.eggCo=await s.loaders.textureLoader.loadAsync(le("/assets/img/mczvc-ws.png"));const a=new me(o.width*n.x,o.height*n.y),d=new Me({map:s.textures.eggCo,transparent:!0,roughness:.9,metalness:1.8}),S=new $(a,d);S.position.set(-p()*1.25+o.width*n.x,Math.max(Math.max(w()*.8,723)-o.height*n.y,o.height*n.y-380),200),c.add(S);const{scale:A,canvasSize:U}=h({width:p()*1.7,height:w()},{width:9772,height:4167});s.textures.emailMe=await s.loaders.textureLoader.loadAsync(le("/assets/img/email-me-at.png"));const _=new me(U.width*A.x,U.height*A.y),C=new Mt({color:6710886,map:s.textures.emailMe}),y=new $(_,C);y.position.set(0,Math.max(w()*.8,683)-U.height*A.y,-10),c.add(y),s.geometry={...s.geometry||{},emailMe:y},s.positions={emailMe:new P().copy(y.position)};const g=s.loaders.textureLoader.load(t.texture.path);s.textures.logoTexture=g;const I=t.texture.res,[T,se]=R(),de=t.grid.segmentsX,ie=t.grid.segmentsY,oe=s.gridGeo=new me(T,se,de,ie);s.gridGeo=oe;const L=s.gridMat=new ee({vertexShader:`
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
}`,uniforms:{uTime:{value:0},uMouse:{value:new j(-1,-1)},uTexture:{value:g},uTexResolution:{value:I},uResolution:{value:new j(...R())},uGlowIntensity:{value:1.65}},side:Se,transparent:!0,depthWrite:!1});s.gridMat=L;function R(){const{scale:W,canvasSize:ae}=h({width:p()*2,height:w()},{width:I.x,height:I.y});return[ae.width*W.x,ae.height*W.y]}s.functions={computeTextureCanvasSize:R};const z=new $(oe,L);z.rotation.x=-.45,z.position.z=0,z.position.y=-w()+w()*.45,c.add(z)}const p=()=>window.innerWidth,w=()=>window.innerHeight;function Be(){const c=new _t,n=new yt(45,window.innerWidth/window.innerHeight,1,2e3),o=new bt({antialias:!0,dithering:!1,depth:!0,depthBuffer:!0,depthSize:16}),a=new Rt(n,o.domElement);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(t.colors.bg,1),o.state.buffers.stencil.setTest(!1);const d=o.getContext();return d.disable(d.CULL_FACE),d.clearDepth(1),d.blendFunc(d.SRC_ALPHA,d.ONE_MINUS_SRC_ALPHA),d.enable(d.BLEND),n.position.z=1720,{scene:c,camera:n,renderer:o,controls:a}}async function ze(c){const n=new $e;s.loaders={textureLoader:n};const{scene:o,camera:a,renderer:d,controls:S}=s.view=Be();await Ue(),c.appendChild(d.domElement),S.enabled=!1,S.update();let A=new et(18,8,150,20),U=new Me({metalness:1,roughness:0,envMapIntensity:1});const _=new $(A,U);_.position.set(-p()*.85,w()*.8,100),_.scale.multiplyScalar(4),o.add(_);const C=new tt(d);C.compileEquirectangularShader(),st.onLoad=function(){C.dispose()};let y;s.textures.reflectionMapping=s.loaders.textureLoader.load(le("/assets/img/equirectangular.png"),function(r){r.mapping=it,r.colorSpace=ot,y=C.fromEquirectangular(r)}),o.background=s.loaders.textureLoader.load(le("/assets/img/about-me.jpg"));const g=new at(16777215,p()<600?220:p()<865?p()*.35:p()*.3125);g.position.set(p(),-w()/2,70),g.castShadow=!0,g.shadow.camera.zoom=4,o.add(g);const I=new nt(16777215,1);I.power=2e3,I.position.set(0,0,1e3),a.lookAt(0,w(),0),a.add(I);const T=Math.min(t.nodes.count,Math.floor(p()*.6)),se=()=>Math.min(window.innerWidth*t.nodes.connectionFactor*.9,t.nodes.maxConnection),de=t.nodes.speedSlow,ie=new rt(2.6+(p()-1)*.0018,8,8),oe=new lt({wireframe:!0,fog:!1,color:t.colors.node}),L=new ct(ie,oe,T);o.add(L);const R=new dt,z=Array.from({length:T},(r,u)=>new Le(Math.random()*window.innerWidth,(Math.random()-.5)*window.innerHeight*2,Math.abs(Math.random()-.6)*se(),re.randFloat(-.1,.25*Math.max(3,p()*.001)),re.randFloat(-.1,.25*Math.max(3,w()*.001)),re.randFloat(-.95,.4),u,i=>{i.dir.add(i.vel),i.dir.setLength(i.speed),i.pos.x=i.pos.x+i.dir.x,i.pos.y=i.pos.y+t.nodes.speedFast*.23*i.dir.y,i.pos.z=i.pos.z+i.dir.z,Math.abs(i.pos.x)>window.innerWidth*.8&&(i.pos.x=-p()*.25),Math.abs(i.pos.y)>w()&&(i.pos.y=-w(),i.dir.y=Math.abs(i.dir.y)*1.7),i.pos.z>150?i.dir.z=-23:i.pos.z<-60&&(i.dir.z=30)},(i,b)=>{let F=0;const M=new P,D=new P(0,0,0),f=new P;for(let m of b){const E=i.pos.distanceTo(m.pos),K=E<t.nodes.getBoundingMinDist(),J=E<t.nodes.getBoundingMaxDist();if(m!==i&&J)if(M.add(m.pos),M.sub(i.pos),f.add(m.dir),K){F++;const ue=v(E,0,Math.max(35,window.innerWidth*.1),-.01,-.001);M.multiplyScalar(ue);const Y=v(E,p()*.013888889,Math.min(25,window.innerWidth*.017361111),-.01,.001);D.add(m.pos),D.add(i.pos),D.multiplyScalar(Y)}else M.multiplyScalar(5e-4),f.multiplyScalar(.005)}F>0&&(M.divideScalar(F),M.sub(i.vel),D.divideScalar(F),D.sub(i.dir),H(D,i.speed*2),f.divideScalar(F),B(f,i.speed),f.sub(i.dir),H(f,i.speed)),i.acceleration.add(M),s.time>=60&&i.acceleration.add(D),s.time>=120&&i.acceleration.add(f),i.vel.add(i.acceleration),H(i.vel,i.speed),i.acceleration.multiplyScalar(0)})),W=new xe,ae=new Float32Array(T*3),Ie=new Float32Array(T);W.setAttribute("position",new ce(ae,3)),W.setAttribute("alphas",new ce(Ie,1));const N=new ee({uniforms:{colorMap:{value:await Ae()},sensitivity:{value:99/255},tint:{value:new P(14,244,251)}},vertexShader:`
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
    } `,transparent:!0,depthWrite:!1,depthTest:!1,side:Se});N.blending=ft,N.blendSrc=ht,N.blendDst=ut,N.blendEquation=pt,N.transparent=!0,N.depthFunc=gt;const k=new mt(W,N);o.add(k),z.forEach((r,u)=>{R.position.copy(r.pos),R.scale.setScalar(r.scale),R.updateMatrix(),L.setMatrixAt(u,R.matrix)}),L.instanceMatrix.needsUpdate=!0;const O=new Map;for(let r=0;r<t.nodes.section.getDivisionsX();r++){O.set(r,new Map);for(let u=0;u<t.nodes.section.getDivisionsY();u++){const i=t.nodes.section.getWidth(),b=t.nodes.section.getHeight();O.get(r).set(u,{x:r*i-i,y:u*b-b,w:i,h:b,nodes:[]})}}function Ne(r){const u=k.geometry.attributes.position.array,i=k.geometry.attributes.alphas.array,b=V.attributes.position.array,F=se();let M=0;if(z.forEach((f,m)=>{var be;if(f.move(),r<=120||r>=180){f.boundingX=Math.round(f.pos.x/t.nodes.section.getWidth())+1,f.boundingY=Math.round(f.pos.y/t.nodes.section.getHeight())+1;const G=O.get(f.boundingX)||new Map([[f.boundingY,{nodes:[]}]]),Z=G.get(f.boundingY)||{nodes:[]};Z&&Z.nodes.push(f),G.set(f.boundingY,Z),O.set(f.boundingX,G)}const E=f.pos,K=E.z,J=m*3;u[J+0]=f.pos.x,u[J+1]=f.pos.y,u[J+2]=f.pos.z,i[m]=(K+90)/255;const ue=f.pos;for(let G=m+1;G<T;G++){const Z=(be=z[G])==null?void 0:be.pos;X.copy(ue),q.copy(Z),X.distanceTo(q)<F&&(b[M++]=X.x,b[M++]=X.y,b[M++]=X.z,b[M++]=q.x,b[M++]=q.y,b[M++]=q.z)}V.setDrawRange(0,M/3);const Y=f.scale*.009+1.9+Math.sin(K*.1*de*.5*(9-f.speed)/((Math.PI/12-Math.PI/16)*150));R.scale.set(Y,Y,Y),R.position.copy(E),R.updateMatrix(),L.setMatrixAt(m,R.matrix);const pe=255/(Math.sin(.1-Y*(1-K*.01))*155),Ye=new Pe(1-pe,pe,pe);L.setColorAt(m,Ye)}),r>120&&r<180)return new Promise(f=>{f()});const D=Math.floor(r%8);if(D===0||D===1||D===3||D===4||D===6||D===7)for(const[,f]of O.entries())for(const[,m]of f.entries()){if(!m.nodes)return;m.nodes.forEach(E=>{E.update(m.nodes)})}return new Promise(f=>{f();for(const[,m]of O.entries())for(const[,E]of m.entries())E.nodes=[]})}const Fe=new vt({color:t.colors.line,transparent:!0,opacity:.6}),V=new xe,Ge=new Float32Array(T*T*3);V.setAttribute("position",new xt(Ge,3));const He=new wt(V,Fe);o.add(He);const ne=s.composer=new kt(d),We=new Ot(o,a),ke={shape:1,radius:p()<600?1:p()<865?2:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1},Oe=new Vt(ke);ne.addPass(We),ne.addPass(Oe);let fe=new j(.5,.5),Q=new P;function Ve(){const r=(fe.x-.5)*2,u=(fe.y-.5)*2;Q.x+=(r*p()*.75-Q.x)*.08,Q.y+=(u*w()*.9-Q.y)*.08,a.position.x+=(Q.x-a.position.x)*.06,a.position.y+=(Q.y-a.position.y)*.06,a.lookAt(0,0,0)}function he(r){const u=r.clientX/window.innerWidth,i=r.clientY/window.innerHeight;fe.set(u,i),s.gridMat.uniforms.uMouse.value.set(u,1-i)}window.addEventListener("pointermove",he,{passive:!0}),window.addEventListener("touchmove",r=>{if(r.touches&&r.touches.length){const u=r.touches[0];he(u)}},{passive:!0});const we=new Ee,X=new P,q=new P;function Qe(r){s.gridMat.uniforms.uTime.value=r;let u=_.material.envMap;return y&&u!==y.texture&&(_.material.envMap=y.texture,_.material.needsUpdate=!0),s.geometry.emailMe.position.x=s.positions.emailMe.x+(Math.sin(Math.sin(r*.15)*Math.PI*2)+.5)*p()*.5,s.geometry.emailMe.position.y=s.positions.emailMe.y+(Math.abs(Math.sin(Math.sin(r*.12)*Math.PI))+1)*w()*.24,Ne(r).then(()=>{L.instanceMatrix.needsUpdate=!0,L.instanceColor.needsUpdate=!0,V.attributes.position.needsUpdate=!0,k.geometry.setDrawRange(0,T),k.geometry.attributes.position.needsUpdate=!0,k.geometry.attributes.alphas.needsUpdate=!0}),new Promise(i=>{i()})}function _e(){const r=performance.now()*.001,u=we.getElapsedTime()%120;s.time=u;const i=we.getDelta();Ve(),Qe(r).then(()=>{d.render(o,a);const b=Math.floor(u%13);b>=0&&b<=4&&ne.render(i)}),requestAnimationFrame(_e)}_e();function ye(){s.gridMat.uniforms.uResolution.value.set(...s.functions.computeTextureCanvasSize()),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight),ne.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),window.removeEventListener("pointermove",he),d.dispose(),s.gridGeo.dispose(),s.gridMat.dispose(),ie.dispose(),V.dispose()}}return Pt(()=>{try{const c=document.getElementById("picosoft-anim"),n=ze(c);Tt(async()=>n&&(await n)())}catch(c){zt("show-picosoft-gl","false").value="false",e.value=c,console.error("!PicosoftAnim",c)}}),(c,n)=>Ut(e)?At("",!0):(Bt(),Lt("div",Qt))}};export{Zt as default};
