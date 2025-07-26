import supabase from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body) {
      return new NextResponse("Missing body", {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    const {
      id,
      ip,
      network,
      version,
      city,
      region,
      region_code,
      country,
      country_name,
      country_code,
      continent_code,
      postal,
      latitude,
      longitude,
      timezone,
      utc_offset,
      currency,
      org,
      display_name,
      email,
      position,
      created_at,
      ...rest
    } = body;

    const { data, error } = await supabase
      .from('sessions')
      .insert({
        id,
        ip,
        network,
        version,
        city,
        region,
        region_code,
        country,
        country_name,
        country_code,
        continent_code,
        postal,
        latitude,
        longitude,
        timezone,
        utc_offset,
        currency,
        org,
        display_name,
        email,
        position,
        created_at
      })
      .single();

    if (error) throw error;

    const telegram = await fetch('https://www.guillaume.ceo/api/telegram', {
      method: 'POST',
      body: JSON.stringify(`🥷 New user from ${country}`)
    });

    return new NextResponse(JSON.stringify(data), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error posting new session:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to post new session' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// export async function PUT(req: NextRequest) {
//   try {
//     const body = await req.json();
//     if (!body || !body.id) {
//       return new NextResponse("Missing body", {
//         status: 400,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//     }

//     const { id, ...rest } = body;
//     const { email, display_name, position } = rest;

//     const { error } = await supabase
//       .from('sessions')
//       .update({ email, display_name, position })
//       .eq('id', id)
//       .select();

//     if (error) throw error;

//     return new NextResponse(JSON.stringify({
//       success: true
//     }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     console.error('Error updating session:', error);
//     return new NextResponse(JSON.stringify({ success: false, error: 'Failed to update session' }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }